import React from 'react';
import Table from '../components/Table';
import fpo from '../data/fpo.json';

const TablePage: React.FC = () => {
  return <Table table={fpo.standings[0].table} />;
};

export default TablePage;
