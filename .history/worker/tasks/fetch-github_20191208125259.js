const fetch = require('node-fetch');

const baseURL = `https://jobs.github.com/positions.json?description=python&location=new+york`;

async function fetchGitHub() {
  const resultCount = 1;
  const onPage = 0;
  const allJobs = [];
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    console.log({ jobs });
    console.log('got', jobs.length, 'jobs');
  }
}

module.exports = fetchGitHub();
