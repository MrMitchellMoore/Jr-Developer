// eslint-disable-next-line no-unused-vars
let { CronJob } = require('cron');
const fetchGitHub = require('./tasks/fetch-github');

CronJob = new CronJob(
  '* * * * * ',
  fetchGitHub,
  null,
  true,
  'America/Los_Angeles'
);
