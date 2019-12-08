/* eslint-disable no-unused-vars */

// node fetch import
const fetch = require('node-fetch');
// node redis import
const redis = require('redis');
// client creation from redis
const client = redis.createClient();
// Utility for Promises working with redis
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

  // filter algorithm
  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();

    if (
      jobTitle.includes('senior') ||
      jobTitle.includes('manager') ||
      jobTitle.includes('sr.') ||
      jobTitle.includes('architect')
    ) {
      return false;
    }
    return true;
  });

  console.log('filtered down to', jrJobs.length);

  // set in redis
    const success = await setAsync('github', JSON.stringify(allJobs));
  console.log(success);
}

module.exports = fetchGitHub;
