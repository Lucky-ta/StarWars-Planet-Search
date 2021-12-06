import React from 'react';
import './App.css';
import FilterField from './Components/FilterField';
import Table from './Components/Table';
import TableProvider from './context/TableProvider';

function App() {
  return (
    <span>
      <TableProvider>
        <FilterField />
        <Table />
      </TableProvider>
    </span>
  );
}

export default App;
