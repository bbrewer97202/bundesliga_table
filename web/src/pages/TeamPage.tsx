import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TeamDetail from '../components/TeamDetail/TeamDetail';
import { query } from '../util.js';
import { Team } from '../types/teams';

interface MatchParams {
  teamId: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const TeamPage = ({ match }: Props) => {
  const { teamId } = match.params;
  const [team, setTeam] = useState<string>();
  const [teamData, setTeamData] = useState<Team>();

  useEffect(() => {
    if (team !== teamId) {
      setTeam(teamId);
      //TODO: error handling
      query(`/team/${teamId}`).then(response => {
        setTeamData(response);
      });
    }
  }, [teamId, team]);

  if (!team) return null;

  return <TeamDetail team={teamData} />;
};

export default TeamPage;
