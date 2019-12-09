/* eslint-disable react/prop-types */
import React from 'react';

export default function Job({ job }) {
  return (
    <div className="Job">
      <h1> Title: {job.title} </h1>
      <h1> Company: {job.company} </h1>
    </div>
  );
}
Job.propTypes = {
    job: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  };
