import React from 'react';
import { Team } from '../../types/teams';
import * as Styled from './LeagueTeamList-styles';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

interface TeamsProps {
  teams: Team[] | null;
}

const TeamsView = ({ teams }: TeamsProps) => {
  if (!teams) {
    return <LoadingSpinner />;
  }

  const { TeamList, TeamListing, TeamLink } = Styled;

  const list = teams.map((team, index) => {
    console.log('team', team);
    return (
      <TeamListing key={index}>
        <TeamLink to={`/teams/${team.tla}`}>
          <img src={team.crestUrl} alt={`${team.name} logo`} />
          <span>{team.name}</span>
        </TeamLink>
      </TeamListing>
    );
  });

  return <TeamList>{list}</TeamList>;
};

export default TeamsView;
