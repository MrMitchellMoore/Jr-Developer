/* eslint-disable no-unused-vars */
const fetch = require('node-fetch');

const redis = require('redis');

const client = redis.createClient();

const { promisify } = require('util');

// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseURL = `https://jobs.github.com/positions.json`;

async function fetchGitHub() {
  let resultCount = 1;
  let onPage = 0;
  const allJobs = [];
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log('got', resultCount, 'jobs');
    onPage += 1;
  }
  console.log('***************************************');
  console.log('got a total of', allJobs.length, 'jobs');
  console.log('***************************************');

  const success = await setAsync('gitH')
}

fetchGitHub();

module.exports = fetchGitHub;
