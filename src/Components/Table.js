import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const {
    data,
    numericFilter: { filterByNumericValues: numericValues },
  } = useContext(MyContext);

  const { planetName: { filterByName: { name } } } = useContext(MyContext);

  function numericFilter(info, planet) {
    if (planet.comparison === 'maior que') {
      return Number(info[planet.column]) > Number(planet.value);
    }
    if (planet.comparison === 'menor que') {
      return Number(info[planet.column]) < Number(planet.value);
    }
    if (planet.comparison === 'igual a') {
      return Number(info[planet.column]) === Number(planet.value);
    }
  }

  const filteredPlanets = data.filter((info) => {
    const filteredArr = numericValues.filter((planet) => numericFilter(info, planet));

    return info.name.toLowerCase().includes(name)
    && numericValues.length === filteredArr.length;
  });

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
            {filteredPlanets
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
