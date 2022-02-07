const request = require('request');

console.log('#before');

let franceBorders = [];
let suisseBorders = [];

request.get(
	'https://restcountries.com/v3.1/name/france',
	function (err, res, body) {
		console.log('#france');

		let result = JSON.parse(body);
		franceBorders = result[0].borders;
		console.log('france borders -->', franceBorders);

		request.get(
			'https://restcountries.com/v3.1/name/suisse',
			function (err, res, body) {
				console.log('#suisse');

				let result = JSON.parse(body);
				suisseBorders = result[0].borders;

				let sameBorders = [];
				franceBorders.forEach((franceBorder) => {
					suisseBorders.forEach((suisseBorder) => {
						console.log(
							suisseBorder,
							franceBorder,
							suisseBorder === franceBorder
						);
						suisseBorder === franceBorder &&
							sameBorders.push(franceBorder);
					});
				});

				console.log(
					'France and Suisse have those same borders',
					sameBorders
				);
			}
		);
	}
);

console.log('#after');
