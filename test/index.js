var request = require('request');

console.log('#1');

request.get(
	'https://restcountries.com/v3.1/name/france',
	function (err, res, body) {
		console.log('#2');

		var result = JSON.parse(body);
		console.log('country :', result);
		console.log('country :', result[0].name);
		console.log('capital :', result[0].capital);
	}
);

console.log('#3');
