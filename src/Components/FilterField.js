import React, { useContext } from 'react';

import MyContext from '../context/MyContext';

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
    </div>
  );
}

export default FilterField;
