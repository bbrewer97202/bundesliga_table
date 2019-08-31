import React from 'react';
import Squad from '../components/Squad';
import { Team } from '../types/teams';

interface TeamsProps {
  team?: Team;
}

const TeamView: React.FunctionComponent<TeamsProps> = ({ team }) => {
  console.log('got team', team);

  if (!team) return null;

  return (
    <div>
      <h1>{team.name}</h1>
      <img src={team.crestUrl} alt={`${team.name} team logo`} />
      <Squad squad={team.squad} />
    </div>
  );
};

export default TeamView;
