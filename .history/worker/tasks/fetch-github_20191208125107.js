const fetch = require('node-fetch');

const baseURL = `https://jobs.github.com/positions.json?description=python&location=new+york`;

async function fetchGitHub() {
  const resultCount = 1;
  const onPage = 0;
  while (resultCount > 0) {
    const res = await fetch(`baseURL`);
    const jobs = await res.json();
    console.log({ jobs });
    console.log(jobs.length);
  }
}

module.exports = fetchGitHub();
