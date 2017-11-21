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

app.post('/', (req, res, next) => {
  let url = req.body.original_url;
  let short_url = shortener(url);
  redisClient.set(short_url[0], short_url[1], err => {
    err ? next(err) : res.redirect('/');
  });
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  if (err.stack) {
    err = err.stack;
  }
  res.status(500).json({ error: err });
});

app.listen(3000);
