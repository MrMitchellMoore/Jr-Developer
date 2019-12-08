const fetch = require('node-fetch');

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
    console.log('got a total of', allJobs.length, 'jobs');
  }
}

fetchGitHub();

module.exports = fetchGitHub;
