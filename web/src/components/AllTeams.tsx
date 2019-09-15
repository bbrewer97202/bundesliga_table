import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Team } from '../types/teams';

interface TeamsProps {
  teams: Team[];
}

const TeamsView: React.FunctionComponent<TeamsProps> = ({ teams }) => {
  if (!teams) return null;

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

  return (
    <div>
      TEAMS COMPONENT
      <TeamList>{list}</TeamList>
    </div>
  );
};

const TeamList = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

const TeamListing = Styled.li`
  display: block;
  margin: 0;
  padding: 0;
  border: dashed 1px orange;
  text-align: center;
  @media screen and (min-width: 680px) {
    width: 33%;
  }
  img {
    display: inline-block;
    width: auto;
    height: 100%;
    @media screen and (min-width: 680px) {
      max-width: 110px;
    }
  }
  span {
    display: block;
  }
`;

const TeamLink = Styled(Link)`
  display: block;
  @media screen and (max-width: 680px) {
    width: 160px;
  }
`;

export default TeamsView;
