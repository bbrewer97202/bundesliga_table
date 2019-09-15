export interface Team {
  id: number;
  area: TeamArea;
  activeCompetitions: TeamCompetition[];
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  squad: Player[];
}

export interface TeamArea {
  id: number;
  name: string;
}

export interface TeamCompetition {
  id: number;
  area: TeamArea;
  name: string;
  code: string;
  plan: string;
  lastUpdated: string;
}

export interface Player {
  id: number;
  name: string;
  position: string | null;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  shirtNumber: number | null;
  role: string;
}

export interface TableEntry {
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
