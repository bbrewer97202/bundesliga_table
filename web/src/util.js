//TODO: error handling
export const query = path => {
  //https://kv4zfbhwei.execute-api.us-west-2.amazonaws.com/dev/
  return fetch(`http://localhost:3030${path}`)
    .then(response => response.json())
    .catch(e => {
      console.log('query error', path, e);
    });
};
