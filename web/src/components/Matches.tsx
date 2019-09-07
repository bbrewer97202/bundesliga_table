import React from 'react';

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
  const table = matches.map((match: Match) => {
    return (
      <div key={match.id}>
        <h5>{`Matchday: ${match.matchday}: ${match.utcDate}`}</h5>
        <div>
          <span>{match.homeTeam.name}</span>
          <span> vs. </span>
          <span>{match.awayTeam.name}</span>
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
