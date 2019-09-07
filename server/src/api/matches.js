import { loadJSONFromS3 } from '../util.js';

async function matches() {
  const team = await loadJSONFromS3(`matches.json`);
  return team;
}

export default matches;
