import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data } = useContext(MyContext);
  const { planetName: { filterByName: { name } } } = useContext(MyContext);

  return (
    <div>
      {data.length === 0 ? 'Carregando' : (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((planet, planetIndex) => (
                <th key={ planetIndex }>{planet.replace('_', ' ')}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.filter((info) => info.name.toLowerCase().includes(name))
              .map((planetInfo, planetIndex) => (
                <tr key={ planetIndex }>
                  {Object.values(planetInfo).map((planetsValues, planetsIndex) => (
                    <td key={ planetsIndex }>{planetsValues}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
