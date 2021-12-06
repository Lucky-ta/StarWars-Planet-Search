import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import fetchPlanetsAPI from '../Services/fetchPlanetsAPI';

export default function TableProvider({ children }) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
  };

  const [planetName, setPlanetName] = useState(INITIAL_STATE);

  const [data, setData] = useState([]);

  async function awaitPlanetsAPIData() {
    const response = await fetchPlanetsAPI();
    setData(response);
  }

  useEffect(() => {
    awaitPlanetsAPIData();
  }, []);

  const value = { data, planetName, setPlanetName };

  return (
    <MyContext.Provider value={ value }>{ children }</MyContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
