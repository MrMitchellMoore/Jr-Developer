const fetch = require('node-fetch');

const baseURL = `https://jobs.github.com/positions.json?description=python&location=new+york`;

async function fetchGitHub() {
  const resultCount = 1;
  let onPage = 0;
  const allJobs = [];
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(jobs);
    console.log('got', jobs.length, 'jobs');
    onPage += 1;
  }
}

module.exports = fetchGitHub();
