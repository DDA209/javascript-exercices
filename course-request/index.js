var request = require('request');

request.get(
	'https://restcountries.com/v3.1/name/france',
	function (err, res, body) {
		// console.log(err);
		// console.log(res.statusCode);
		// console.log(body);
		const france = JSON.parse(body);
		// console.log(france);
		const currenciesSymbol = france[0].currencies.EUR.symbol;
		console.log(currenciesSymbol);
	}
);
