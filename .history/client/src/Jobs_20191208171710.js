/* eslint-disable react/prop-types */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

export default function Jobs() {
	const {jobs} = this.props; 
  return (
    <div className="Jobs">
      <Typography variant="h1">Entry Level Software Jobs</Typography>
      {jobs.map(job => (
        <Job key={job.company} job={job} />
      ))}
    </div>
  );
}
