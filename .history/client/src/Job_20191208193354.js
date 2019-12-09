/* eslint-disable react/prop-types */
import React from 'react';

export default function Job({ props }) {
  return (
    <div className="Job">
      <h1> Title: {props.title} </h1>
      <h1> Company: {props.company} </h1>
    </div>
  );
}
// Job.propTypes = {
//   job: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//     PropTypes.object,
//     PropTypes.array,
//     PropTypes.func,
//   ]),
// };
