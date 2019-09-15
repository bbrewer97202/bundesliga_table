import React, { useState, useEffect } from 'react';
import AllTeams from '../components/AllTeams';
import { query } from '../util.js';
import { TableEntry } from '../types/teams';

const AllTeamsPage: React.FC = () => {
  const [teamsList, setTeamsList] = useState([]);

  useEffect(() => {
    query(`/teams`).then((response = []) => {
      const list = response.map((entry: TableEntry) => entry.team);
      setTeamsList(list);
    });
  }, []);

  return <AllTeams teams={teamsList} />;
};

export default AllTeamsPage;
