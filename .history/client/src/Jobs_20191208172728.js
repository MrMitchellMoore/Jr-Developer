/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

const Jobs = (jobs => {
  return (
    <div className="Jobs">
      <Typography variant="h1">Entry Level Software Jobs</Typography>
      {props.jobs.map(job => (
        <Job key={job.company} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
