/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';

import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs';

// const mockJobs = [
//   { title: 'SWE 1', company: 'Google' },
//   { title: 'SWE 1', company: 'Facebook' },
//   { title: 'SWE 1', company: 'Apple' },
//   { title: 'SWE 1', company: 'SnapChat' },
// ];

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json);
}

function App() {
  const { jobs, updateJobs } = React.useState([]);
  React.useEffect(() => {
    fetchJobs(updateJobs);
  });

  return (
    <div className="App">
      <Jobs job={jobs} />
    </div>
  );
}

export default App;
