import { getTeamIdByTLA, loadJSONFromS3 } from '../util.js';

async function team(tla) {
  const id = getTeamIdByTLA(tla);
  if (!tla || !id) return;
  const team = await loadJSONFromS3(`${tla}.json`);
  return team;
}

export default team;
