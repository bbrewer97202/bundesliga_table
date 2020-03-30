import React from 'react';
import Styled from 'styled-components';
import { Player } from '../../types/teams';

interface SquadProps {
  squad: Player[];
}

const Squad: React.FunctionComponent<SquadProps> = ({ squad }) => {
  if (!squad) return null;

  const coachList = squad
    .filter(player => player.role === 'COACH')
    .map((player, index) => {
      return <div key={index}>{player.name}</div>;
    });

  const assistantCoachList = squad
    .filter(player => player.role === 'ASSISTANT_COACH')
    .map((player, index) => {
      return <div key={index}>{player.name}</div>;
    });

  const squadList = squad
    .filter(player => player.position && player.role === 'PLAYER')
    .map((player, index) => {
      return (
        <div key={index}>
          {player.position} {player.name}
        </div>
      );
    });

  return (
    <TeamView>
      <h3>Coach</h3>
      {coachList}

      <h3>Assistant Coach</h3>
      {assistantCoachList}

      <h3>Squad:</h3>
      {squadList}
    </TeamView>
  );
};

const TeamView = Styled.div`
`;

export default Squad;
