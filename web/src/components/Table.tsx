import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  table: any;
}

interface Team {
  id: number;
  name: string;
  tla: string;
  crestUrl: string;
}

interface Entry {
  draw: number;
  goalDifference: number;
  goalsAgainst: number;
  goalsFor: number;
  lost: number;
  playedGames: number;
  points: number;
  position: number;
  team: Team;
  won: number;
}

const TableView: React.FunctionComponent<Props> = ({ table = [] }) => {
  const rows = table.map((entry: Entry, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell>{entry.position}</TableCell>
        <TableCell align="left">
          <TeamIcon src={entry.team.crestUrl} alt={entry.team.name} />
          <Link to={`/team/${entry.team.tla}`}>{entry.team.name}</Link>
        </TableCell>
        <TableCell>{entry.playedGames}</TableCell>
        <TableCell>{entry.points}</TableCell>
        <TableCell>{entry.won}</TableCell>
        <TableCell>{entry.lost}</TableCell>
        <TableCell>{entry.draw}</TableCell>
        <TableCell>{entry.goalDifference}</TableCell>
      </TableRow>
    );
  });

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead>Position</TableHead>
          <TableHead align="left">Team</TableHead>
          <TableHead>
            Games
            <br />
            Played
          </TableHead>
          <TableHead>Points</TableHead>
          <TableHead>Wins</TableHead>
          <TableHead>Loses</TableHead>
          <TableHead>Draws</TableHead>
          <TableHead>
            Goal
            <br />
            Difference
          </TableHead>
        </TableRow>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

const TeamIcon = Styled.img`
  display: inline-block;
  width: 20px;
  height: auto;
  margin-right: 0.5em;
  vertical-align: middle;
`;

const Table = Styled.table`
  border-spacing: 0;
`;

const TableRow = Styled.tr`
  &:nth-of-type(even) {
    background-color: #eee;
  }
`;

const TableHead = Styled.th`
  text-align: ${({ align }) => (align === 'left' ? 'left' : 'center')};
  padding: 0.2rem 0.6rem;
  background-color: #f2661f;
  color: #fff;
`;

const TableCell = Styled.td`
  text-align: ${({ align }) => (align === 'left' ? 'left' : 'center')};
  padding: 0.2rem 0.6rem;
  height: 32px;
`;

export default TableView;
