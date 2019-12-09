/* eslint-disable react/prop-types */
import React from 'react';

const Job = job => {
  return (
    <div className="Job">
      <h1> Title: {job.title} </h1>
      <h1> Company: {job.company} </h1>
    </div>
  );
};


