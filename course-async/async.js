const request = require('request');

const apiBase = 'https://restcountries.com/v3.1/name/';

const country1 = 'afghanistan';
const country2 = 'russia';

const apiUrlCountry1 = apiBase + country1;
const apiUrlCountry2 = apiBase + country2;

// console.log('apiUrlCountry1 >>>', apiUrlCountry1);
// console.log('apiUrlCountry2 >>>', apiUrlCountry2);
let firstCountryBorders = [];
let secondCountryBorders = [];

request.get(apiUrlCountry1, (err, res, body) => {
	if (err) {
		console.log(err);
		return;
	}
	// console.log('GET body >>>', body);
	const country = JSON.parse(body);
	// console.log(country[0].name.common);
	// console.log(country);
	firstCountryBorders = country[0].borders;

	request.get(apiUrlCountry2, (err, res, body) => {
		if (err) {
			console.log(err);
			return;
		}
		// console.log('GET body >>>', body);
		const country = JSON.parse(body);
		// console.log(country[0].name.common);
		secondCountryBorders = country[0].borders;

		console.log(firstCountryBorders);
		console.log(secondCountryBorders);

		let sameBorders = [];

		firstCountryBorders.forEach((borderFirstCountry) => {
			// console.log(borderFirstCountry);
			secondCountryBorders.forEach((borderSecondCountry) => {
				// console.log('---', borderSecondCountry);
				if (borderFirstCountry === borderSecondCountry) {
					sameBorders.push(borderSecondCountry);
				}
			});
		});
		console.log(sameBorders);
	});
});

// console.log('Zip');
