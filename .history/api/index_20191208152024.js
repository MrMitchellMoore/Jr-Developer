const express = require('express');

const app = express();
const port = 3001;

// node redis import
const redis = require('redis');
// client creation from redis
const client = redis.createClient();
// Utility for Promises working with redis
const { promisify } = require('util');
 
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
