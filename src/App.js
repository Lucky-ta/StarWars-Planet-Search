import React from 'react';
import './App.css';
import Table from './Components/Table';
import TableProvider from './context/TableProvider';

function App() {
  return (
    <span>
      <TableProvider>
        <Table />
      </TableProvider>
    </span>
  );
}

export default App;
