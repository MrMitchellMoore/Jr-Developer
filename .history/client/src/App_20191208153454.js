import React from 'react';
import './App.css';

import Jobs from './Jobs';

const JOB_API_u

const mockJobs = [
	{title: 'SWE 1', company: 'Google'},
	{title: 'SWE 1', company: 'Facebook'},
	{title: 'SWE 1', company: 'Apple'},
	{title: 'SWE 1', company: 'SnapChat'}
]

async function fetchJobs(){
	fetch()
}

function App() {
  return (
	<div className="App">
	    <Jobs jobs={mockJobs} />
	</div>
  );
}

export default App;
