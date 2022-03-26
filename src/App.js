import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Nav />
      <Table />
    </Provider>
  );
}

export default App;
