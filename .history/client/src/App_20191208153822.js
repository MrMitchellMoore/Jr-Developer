import React from 'react';
import './App.css';

import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs';

const mockJobs = [
  { title: 'SWE 1', company: 'Google' },
  { title: 'SWE 1', company: 'Facebook' },
  { title: 'SWE 1', company: 'Apple' },
  { title: 'SWE 1', company: 'SnapChat' },
];

async function fetchJobs() {
  const jobs = await fetch(JOB_API_URL);
}

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
