import React, { useEffect, useState } from 'react';
import Table from '../components/Table/Table';
import { query } from '../util.js';
import { TableEntry } from '../types/teams';

type TableState = TableEntry[] | [];

const TablePage = () => {
  const [table, setTable] = useState<TableState>([]);

  useEffect(() => {
    query(`/table`).then(response => {
      setTable(response);
    });
  }, []);

  return <Table table={table} />;
};

export default TablePage;
