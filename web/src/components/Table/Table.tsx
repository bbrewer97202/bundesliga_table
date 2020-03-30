import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './Table-styles';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { TableEntry } from '../../types/teams';

interface Props {
  table: TableEntry[];
}

const { Table, TableHead, TableRow, TableCell, TeamIcon } = Styled;

const TableView = ({ table = [] }: Props) => {
  if (!table.length) {
    return <LoadingSpinner />;
  }

  const rows = table.map((entry: TableEntry, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell>{entry.position}</TableCell>
        <TableCell align="left">
          <TeamIcon src={entry.team.crestUrl} alt={entry.team.name} />
          <Link to={`/teams/${entry.team.tla}`}>{entry.team.name}</Link>
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

export default TableView;
