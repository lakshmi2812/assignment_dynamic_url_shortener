const urlShortener = url => {
  let string = 'url.sh/';
  let generator = Math.random()
    .toString(36)
    .substring(7);
  string += generator;
  console.log([string, url]);
  return [string, url];
};

module.exports = urlShortener;
