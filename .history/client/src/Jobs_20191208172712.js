/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

const Jobs = props => {
  return (
    <div className="Jobs">
      <Typography variant="h1">Entry Level Software Jobs</Typography>
      // eslint-disable-next-line react/prop-types
      {props.jobs.map(job => (
        <Job key={job.company} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
