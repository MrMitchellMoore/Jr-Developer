/* eslint-disable no-unused-vars */
// required express
const express = require('express');
// init express
const app = express();
// set port
const port = 3001;

// node redis import
const redis = require('redis');
// client creation from redis
const client = redis.createClient();
// Utility for Promises working with redis
const { promisify } = require('util');

const getAsync = promisify(client.get).bind(client);

app.use(function(req, res, next) {
   // update to match the domain you will make the request from
  next();
});

// route for getting all jobs
app.get('/jobs', async (req, res, next) => {
  const jobs = await getAsync('github');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  return res.send(jobs);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
