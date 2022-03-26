import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../services/fetchAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    const apiResult = async () => {
      const planetsInfo = await fetchAPI();
      const resultsInfo = planetsInfo.results;
      setData(resultsInfo);
    };
    apiResult();
  }, []);
  const context = {
    data,
    nameFilter,
    setNameFilter,
  };
  // console.log('context', context);
  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
