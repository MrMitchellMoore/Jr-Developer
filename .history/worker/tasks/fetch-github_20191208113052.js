let fetch = require('node-fetch');

const baseURL = "https://jobs.github.com/positions.json?description=python&location=new+york"

async function fetchGithub(){
    
    let resultCount = 1;
    while(resultCount > 0) 
        const res = await fetch(baseURL);
        const jobs = await res.json();
        console.log({jobs});
        console.log(jobs.length);
    
    }
    
}

module.exports = fetchGitHub;