import { loadJSONFromS3 } from '../util.js';
import teamData from '../../../data/teamData.json';

function getSupplementalTeamData(id) {
  return teamData.find(item => item.id === id);
}

//TODO: do not derrive this from standings but rather create a teamlist as a scheduled task
async function teamlist() {
  const standings = await loadJSONFromS3('standings.json');
  if (!standings) return [];
  const table = standings.standings[0].table.map(entry => {
    const { tla } = getSupplementalTeamData(entry.team.id) || {};
    entry.team.tla = tla;
    return entry;
  });
  return table;
}

export default teamlist;
