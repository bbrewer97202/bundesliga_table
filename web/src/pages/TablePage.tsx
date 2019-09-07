import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import { query } from '../util.js';

const TablePage: React.FC = () => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    query(`/table`).then(response => {
      setTable(response);
    });
  }, []);

  return <Table table={table} />;
};

export default TablePage;
