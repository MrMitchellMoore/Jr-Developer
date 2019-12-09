/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import Job from './Job';

export default function Jobs({ jobs }) {
  return {
    <div className="Jobs">
      {jobs.map((job, i) => (
        <Job key={i} job={job} />
      ))}
    </div>
  };
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
