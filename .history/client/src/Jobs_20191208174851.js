import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

export default function Jobs({}) {
  return (
    <div className="Jobs">
      <Typography variant="h1">Entry Level Software Jobs</Typography>
      {jobs.map((job, i) => (
        <Job key={i} job={job} />
      ))}
    </div>
  );
};
