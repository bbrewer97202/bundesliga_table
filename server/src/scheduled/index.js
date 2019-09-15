import { queryFootballAPI, saveToS3 } from '../util.js';

export const handler = async () => {
  const standings = await queryFootballAPI('/competitions/2002/standings');
  if (!standings) {
    console.log('getStandings could not load results');
    return false;
  }
  const saved = await saveToS3(standings, 'standings.json');
  console.log('standings saved', saved);
};
