import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import fetchPlanetsAPI from '../Services/fetchPlanetsAPI';

export default function TableProvider({ children }) {
  const NAME_FILTER_INITIAL_STATE = {
    filterByName: {
      name: '',
    },
  };

  const NUMERIC_FILTER_INITIAL_STATE = {
    filterByNumericValues: [],
  };

  const [planetName, setPlanetName] = useState(NAME_FILTER_INITIAL_STATE);

  const [data, setData] = useState([]);

  const [numericFilter, setNumericFilter] = useState(NUMERIC_FILTER_INITIAL_STATE);

  async function awaitPlanetsAPIData() {
    const response = await fetchPlanetsAPI();
    setData(response);
  }

  useEffect(() => {
    awaitPlanetsAPIData();
  }, []);

  const value = {
    data,
    planetName,
    setPlanetName,
    numericFilter,
    setNumericFilter };

  return (
    <MyContext.Provider value={ value }>{ children }</MyContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
