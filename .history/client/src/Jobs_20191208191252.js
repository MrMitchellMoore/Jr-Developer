/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './';

export default function Jobs({ jobs }) {
  return (
    <div className="Jobs">
      <Typography variant="h1">Entry Level Software Jobs</Typography>
      {jobs.map(job => (
        <Job key={job.company} job={job} />
      ))}
    </div>
  );
}

// Jobs.propTypes = {
//   jobs: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.object,
//     PropTypes.array,
//     PropTypes.func,
//   ]),
// };
