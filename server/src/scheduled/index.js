import { queryFootballAPI, saveToS3 } from '../util.js';

export const getStandings = async (event, context) => {
  //TODO: need event or context?
  const standings = await queryFootballAPI('/competitions/2002/standings');
  //TODO: error checking
  // if (!standings) {
  //   console.log('getStandings could not load results');
  //   return false;
  // }
  // console.log('getStandings: ', JSON.stringify(standings));
  console.log('typeof standings', typeof standings);
  const saved = saveToS3(standings, 'standings.json');
  console.log('saved', saved);
};
