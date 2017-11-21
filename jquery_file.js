$(document).ready(){
  let addRoute = $('#shorten').click(function(shortUrl, originalUrl, used) {
  	$('#body').append(
  		`<tr><td>${shortUrl}</td><td>${originalUrl}</td><td>${used}</td></tr>`
  	);
  });
};

module.exports = addRoute;
