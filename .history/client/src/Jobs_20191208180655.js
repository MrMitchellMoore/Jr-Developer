/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

export default function Jobs({ jobs }) {
  return (
    <div className="Jobs">
      
      {jobs.map((job, i) => (
        <Job key={i} job={job} />
      ))}
    </div>
  );
}

Jobs.propTypes = {
  jobs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};
