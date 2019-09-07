import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Team from '../components/Team';
import { query } from '../util.js';

interface MatchParams {
  teamId: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const TeamPage: React.FC<Props> = ({ match }) => {
  const { teamId } = match.params;
  const [team, setTeam] = useState();
  const [teamData, setTeamData] = useState();

  useEffect(() => {
    if (team !== teamId) {
      setTeam(teamId);
      query(`/team/${teamId}`).then(response => {
        setTeamData(response);
      });
    }
  }, [teamId, team]);

  if (!team) return null;

  return <Team team={teamData} />;
};

export default TeamPage;
