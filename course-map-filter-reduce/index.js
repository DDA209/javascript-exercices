// MAP
var numbers = [1, 2, 3, 4, 5];

var doubles = numbers.map(function (number) {
	return number * 2;
});

// console.log(doubles); // retournera [2, 4, 6, 8, 10]
// console.log(numbers); // retournera [1, 2, 3, 4, 5]

let smallPhoneNumbers = [
	'615783562',
	'713568415',
	'1015046123',
	'615783562',
	'713568415',
	'1015046123',
	'1015046123',
	'615783562',
	'713568415',
	'1015046123',
	'1015046123',
	'615783562',
	'713568415',
	'1015046123',
	'1015046123',
	'1015046123',
	'1015046123',
];

let internationaledPhoneNumbers = smallPhoneNumbers.map((smallPhoneNumber) => {
	if (smallPhoneNumber[0] === '7') {
		return '+33 (0) ' + smallPhoneNumber;
	} else if (smallPhoneNumber[0] === '6') {
		return '+42 (0) ' + smallPhoneNumber;
	} else {
		return smallPhoneNumber;
	}
});

// console.log(internationaledPhoneNumbers);

// FILTER
var numbers = [1, 2, 3, 4, 5];

var big = numbers.filter(function (num) {
	return num >= 3;
});

var big = numbers.filter((num) => num >= 3);

console.log(big); // retournera [3, 4, 5]
