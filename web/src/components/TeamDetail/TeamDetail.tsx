import React from 'react';
import Squad from './Squad';
import { Team } from '../../types/teams';

interface TeamsProps {
  team?: Team;
}

const TeamDetail = ({ team }: TeamsProps) => {
  if (!team) return null;

  return (
    <div>
      <h1>{team.name}</h1>
      <img src={team.crestUrl} alt={`${team.name} team logo`} />
      <Squad squad={team.squad} />
    </div>
  );
};

export default TeamDetail;
