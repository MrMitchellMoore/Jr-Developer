let fetch = require('node-fetch');

const baseURL = "https://jobs.github.com/positions.json?description=python&location=new+york"

module.exports = async function fetchGithub(){
    const res = await fetch(baseUrl);
    const job
}

module.exports();