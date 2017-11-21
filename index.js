const express = require('express');
const app = express();
const redis = require('redis');
const redisClient = redis.createClient();
const shortener = require('./link_shortener');

app.get('/', (req, res) => {
	res.end('./index.html');
});

app.post('/', (req, res) => {
	let url = req.body.original_url;
	let short_url = shortener(url);
	res.end(short_url);
});

app.listen(3000);
