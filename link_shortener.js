const urlShortener = url => {
	let string = 'url.sh/';
	url = 'http://' + url;
	let generator = Math.random()
		.toString(36)
		.substring(7);
	string += generator;
	console.log([string, url]);
	return [string, url];
};

module.exports = urlShortener;
