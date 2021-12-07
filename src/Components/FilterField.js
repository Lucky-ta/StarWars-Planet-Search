import React, { useContext } from 'react';

import MyContext from '../context/MyContext';
import FilterNumericValues from './FilterNumericValues';

function FilterField() {
  const { planetName, setPlanetName } = useContext(MyContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ ({ target }) => setPlanetName(
          { ...planetName, filterByName: { name: target.value } },
        ) }
      />
      <FilterNumericValues />
    </div>
  );
}

export default FilterField;
