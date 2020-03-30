//TODO: error handling
//TODO: env vatiable for remote
//TODO: localhost vs remote detection
export const query = path => {
  //https://kv4zfbhwei.execute-api.us-west-2.amazonaws.com/dev/
  return fetch(`http://localhost:3030${path}`)
    .then(response => response.json())
    .catch(e => {
      console.log('query error', path, e);
    });
};

//TODO: read list from file
export const getTLAByTeamId = id => {
  const tlaList = [
    { id: 1, tla: 'KOE' },
    { id: 2, tla: 'TSG' },
    { id: 3, tla: 'B04' },
    { id: 4, tla: 'BVB' },
    { id: 5, tla: 'FCB' },
    { id: 6, tla: 'S04' },
    { id: 9, tla: 'BSC' },
    { id: 11, tla: 'WOB' },
    { id: 12, tla: 'SVW' },
    { id: 15, tla: 'M05' },
    { id: 16, tla: 'FCA' },
    { id: 17, tla: 'SCF' },
    { id: 18, tla: 'BMG' },
    { id: 19, tla: 'SGE' },
    { id: 24, tla: 'F95' },
    { id: 28, tla: 'UNB' },
    { id: 29, tla: 'SCP' },
    { id: 721, tla: 'RBL' },
  ];
  const team = tlaList.find(item => item.id === id) || {};
  return team.tla;
};
