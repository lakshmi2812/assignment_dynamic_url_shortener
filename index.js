'use strict';

const express = require('express');
const app = express();
const redis = require('redis');
const redisClient = redis.createClient();
const shortener = require('./link_shortener');
const bodyparse = require('body-parser');

app.use(bodyparse());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  let url = req.body.original_url;
  let short_url = shortener(url);
  let shortString = short_url[0];
  let originalUrl = short_url[1];
  redisClient.set(shortString, originalUrl);
  // SET shortString originalUrl;
  res.redirect('/');
});

app.listen(3000);
