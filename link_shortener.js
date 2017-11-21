const urlShortener = url => {
  let string = 'url.sh/';
  let generator = Math.random()
    .toString(36)
    .substring(7);
  string += generator;
  return { url: string };
};

module.exports = { urlShortener };
