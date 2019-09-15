import React from 'react';
import { Link } from 'react-router-dom';
import { getTLAByTeamId } from '../util.js';

interface Props {
  matches: any;
}

interface Match {
  id: number;
  utcDate: string;
  status: 'SCHEDULED' | 'LIVE' | 'IN_PLAY' | 'PAUSED' | 'FINISHED' | 'POSTPONED' | 'SUSPENDED' | 'CANCELED';
  matchday: number;
  stage: string;
  group: string;
  lastUpdated: string;
  season: MatchSeason;
  score: MatchScore;
  homeTeam: MatchTeam;
  awayTeam: MatchTeam;
  referees: MatchReferee[];
}

interface MatchSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
}

interface MatchTime {
  homeTeam?: number;
  awayTeam?: number;
}

interface MatchScore {
  winner: string;
  duration: string;
  fullTime: MatchTime;
  halfTime: MatchTime;
  extraTime: MatchTime;
  penalties: MatchTime;
}

interface MatchTeam {
  id: number;
  name: string;
}

interface MatchReferee {
  id: number;
  name: string;
  nationality?: string;
}

const MatchesView: React.FunctionComponent<Props> = ({ matches = [] }) => {
  const matchDays = {};

  const table = matches.map((match: Match) => {
    if (match.matchday !== 2) return;
    return (
      <div key={match.id}>
        <h5>{`Matchday: ${match.matchday}: ${match.utcDate}`}</h5>
        <div>
          <span>
            <Link to={`/teams/${getTLAByTeamId(match.homeTeam.id)}`}>{match.homeTeam.name}</Link>
          </span>
          <span> vs. </span>
          <Link to={`/teams/${getTLAByTeamId(match.awayTeam.id)}`}>{match.awayTeam.name}</Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Matches</h1>
      {table}
    </div>
  );
};

export default MatchesView;
