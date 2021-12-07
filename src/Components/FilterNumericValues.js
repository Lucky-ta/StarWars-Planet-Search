import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

export const dropDownOption = [
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
  const { numericFilter, setNumericFilter } = useContext(MyContext);
  const [optionList, setOptionList] = useState(dropDownOption);

  function removeOption() {
    const index = optionList.indexOf(state.column);
    const filteredList = optionList.filter((option) => option !== state.column);
    setOptionList(filteredList);
    setState({
      ...state,
      column: filteredList[index < filteredList.length ? index : 0],
    });
  }

  function handleChange({ target }) {
    setState({
      ...state,
      [target.name]: target.value,
    });
  }

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
        {optionList.map((option, optionIndex) => (
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
        onClick={ () => { sendFilters(); removeOption(); } }
        data-testid="button-filter"
        type="button"
      >
        Filtrar

      </button>
    </form>
  );
}

export default FilterNumericValues;
