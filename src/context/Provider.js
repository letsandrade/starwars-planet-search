import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../services/fetchAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  // const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const apiResult = async () => {
      const planetsInfo = await fetchAPI();
      const resultsInfo = planetsInfo.results;
      setData(resultsInfo);
      // console.log('dentro da função apiResponse', resultsInfo);
    };
    apiResult();
  }, []);
  // console.log('data', data);
  return (
    <Context.Provider value={ data }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
