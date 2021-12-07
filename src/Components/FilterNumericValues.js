import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

const dropDownOption = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const dropDownCompareOptions = [
  'maior que',
  'menor que',
  'igual a',
];

const INITIAL_STATE = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

function FilterNumericValues() {
  const [state, setState] = useState(INITIAL_STATE);

  function handleChange({ target }) {
    setState({
      ...state,
      [target.name]: target.value,
    });
  }

  const { numericFilter, setNumericFilter } = useContext(MyContext);

  function sendFilters() {
    setNumericFilter({
      ...numericFilter,
      filterByNumericValues: [...numericFilter.filterByNumericValues, state],
    });
  }

  return (
    <form>
      <select
        name="column"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {dropDownOption.map((option, optionIndex) => (
          <option
            key={ optionIndex }
          >
            {option}
          </option>
        ))}
      </select>
      <select
        name="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        {dropDownCompareOptions.map((option, optionIndex) => (
          <option key={ optionIndex }>{option}</option>
        ))}
      </select>
      <input
        name="value"
        onChange={ handleChange }
        data-testid="value-filter"
        type="number"
        value={ state.value }
      />
      <button
        onClick={ sendFilters }
        data-testid="button-filter"
        type="button"
      >
        Filtrar

      </button>
    </form>
  );
}

export default FilterNumericValues;
