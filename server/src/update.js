const AWS = require('aws-sdk');

// if (process.env.IS_OFFLINE) {
//   const credentials = new AWS.SharedIniFileCredentials({ profile: 'cogex' });
//   AWS.config.credentials = credentials;
// }

const s3 = new AWS.S3();

async function collect(data) {
  try {
    if (!data) return false;
    // const { project, stage, user } = data;
    // if (!project || !stage || !user) return false;
    // await saveTracking(data);
    return true;
  } catch (e) {
    console.log('collect error', e);
    return false;
  }
}

async function saveTracking(data) {
  const { project, stage, user } = data;
  const now = new Date().getTime();
  const key = `${project}/${stage}/${now}-${user}.json`;
  console.log('-----------------------------');
  console.log(`${data.timestamp} ${JSON.stringify(data.event)}`);
  return s3
    .putObject({
      Bucket: process.env.STORAGE_BUCKET,
      Key: key,
      ContentType: 'application/json',
      Body: JSON.stringify(data),
    })
    .promise();
}

module.exports = collect;
