import React, { useState, useEffect } from 'react';
import AllTeams from '../components/LeagueTeamList/LeagueTeamList';
import { query } from '../util.js';
import { TableEntry } from '../types/teams';

const AllTeamsPage = () => {
  // const [teamsList, setTeamsList] = useState<TableEntry[]|[]>([]);
  const [teamsList, setTeamsList] = useState([]);

  useEffect(() => {
    query(`/teams`).then((response = []) => {
      const list = response.map((entry: TableEntry) => entry.team);
      setTeamsList(list);
      console.log('list', list);
    });
  }, []);

  return <AllTeams teams={teamsList} />;
};

export default AllTeamsPage;
