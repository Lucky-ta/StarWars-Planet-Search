import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data } = useContext(MyContext);

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
            {data.map((planetInfo, index) => (
              <tr key={ index }>
                {Object.values(planetInfo).map((info, indexInfo) => (
                  <td key={ indexInfo }>
                    {info}
                  </td>
                ))}
              </tr>))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
