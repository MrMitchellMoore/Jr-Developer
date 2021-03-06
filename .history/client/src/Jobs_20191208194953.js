/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

export default function Jobs({ jobs }) {
  return (
    <div className="Jobs">
      <Typography variant="h1">Entry Level Software Jobs</Typography>
      {jobs.map((job, i) => (
        <Job key={i} job={job} />
      ))}
    </div>
  );
}
