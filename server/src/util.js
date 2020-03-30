import AWS from 'aws-sdk';
import fetch from 'node-fetch';
import teamData from '../../data/teamData.json';

if (process.env.IS_OFFLINE && process.env.AWS_PROFILE) {
  const credentials = new AWS.SharedIniFileCredentials({ profile: process.env.AWS_PROFILE });
  AWS.config.credentials = credentials;
}
const s3 = new AWS.S3();

export const loadJSONFromS3 = async key => {
  if (!process.env.STORAGE_BUCKET) {
    console.log('missing environment variable STORAGE_BUCKET');
    return false;
  }

  try {
    const data = await s3
      .getObject({
        Bucket: process.env.STORAGE_BUCKET,
        Key: key,
      })
      .promise();
    return JSON.parse(new Buffer(data.Body).toString('utf8'));
  } catch (e) {
    console.log('loadJSONFromS3 error', key, e);
    return;
  }
};

export const saveToS3 = async (data, key) => {
  if (!process.env.STORAGE_BUCKET) {
    console.log('missing environment variable STORAGE_BUCKET');
    return false;
  }

  data = typeof data !== 'string' ? JSON.stringify(data) : data;

  console.log('saveToS3 bucket: ', process.env.STORAGE_BUCKET);
  console.log('saveToS3 key: ', key);
  console.log('saveToS3 data: ', data);

  try {
    return s3
      .putObject({
        Bucket: process.env.STORAGE_BUCKET,
        Key: key,
        ContentType: 'application/json',
        Body: data,
      })
      .promise();
  } catch (e) {
    console.log('saveJSONToS3 error', key, e);
    return false;
  }
};

export const queryFootballAPI = async path => {
  const BASE_URL = 'http://api.football-data.org/v2';
  const url = `${BASE_URL}${path}`;

  if (!process.env.FOOTBALL_DATA_TOKEN) {
    console.log('missing environment variable FOOTBALL_DATA_TOKEN');
    return false;
  }

  try {
    return fetch(url, {
      method: 'GET',
      headers: { 'X-Auth-Token': process.env.FOOTBALL_DATA_TOKEN },
    }).then(response => response.json());
  } catch (e) {
    console.log('api call error', url, e);
  }
};

export const getTeamIdByTLA = tla => {
  const team = teamData.find(item => item.tla === tla);
  return team && team.id ? team.id : null;
};
