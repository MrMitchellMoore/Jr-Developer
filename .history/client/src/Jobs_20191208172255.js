/* eslint-disable react/prop-types */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

const { jobs } = (jobs) => {
  return (
    <div className="Jobs">
      <Typography variant="h1">Entry Level Software Jobs</Typography>
      {jobs.map(job => (
        <Job key={job.company} job={job} />
      ))}
    </div>
  );
};

export default jobs;
