// eslint-disable-next-line no-unused-vars
let { CronJob } = require('cron');
const fetch
CronJob = new CronJob(
  '* * * * * *',
  function() {
    console.log('You will see this message every second');
  },
  null,
  true,
  'America/Los_Angeles'
);
