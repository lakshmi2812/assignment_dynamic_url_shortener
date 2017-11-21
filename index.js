const express = require('express');
const app = express();
const redis = require('redis');
const redisClient = redis.createClient();
const shortener = require('./link_shortener');
