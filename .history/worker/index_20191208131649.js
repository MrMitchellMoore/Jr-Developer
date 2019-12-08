const { CronJob } = require('cron');

// eslint-disable-next-line no-new
CronJob = new CronJob(
  '* * * * * *',
  function() {
    console.log('You will see this message every second');
  },
  null,
  true,
  'America/Los_Angeles'
);
