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

app.get('/jobs', async (req, res) => {
    const jobs = await getAsync()
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
