/* eslint-disable no-unused-vars */

// node fetch import
const fetch = require('node-fetch');

const redis = require('redis');

const client = redis.createClient();

const { promisify } = require('util');

// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
// base Url that we will work with
const baseURL = `https://jobs.github.com/positions.json`;

let resultCount = 1;
let onPage = 0;
const allJobs = [];

// fetch function to get jobs
async function fetchGitHub() {
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log('got', resultCount, 'jobs');
    onPage += 1;
  }

  // set in redis
  console.log('***************************************');
  console.log('got a total of', allJobs.length, 'jobs');
  console.log('***************************************');

  const success = await setAsync('github', JSON.stringify(allJobs));
  console.log(success);
}

module.exports = fetchGitHub;
