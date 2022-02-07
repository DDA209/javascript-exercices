// 01 - File System
const fs = require('fs');

fs.readFile('./jour07.txt', 'utf-8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	// const fileContent = data.toString()
	// console.log('exchanging information:' + fileContent)

	console.log('readFile data >>>', data);
});

// 02 - Map double

const array = [1, 2, 3, 4, 5];

const double = array.map((number) => {
	return number * 2;
});

const doubleAlt = array.map((number) => number * 2); // alternative sans {} return est implicite

console.log(double);
console.log(doubleAlt);

// 03 - Map Names

const longNames = [
	{
		firstName: 'Jane',
		lastName: 'Doe',
	},
	{
		firstName: 'John',
		lastName: 'Smith',
	},
];

const shortNames = longNames.map((person) => {
	// console.log('map person >>>', person);
	// console.log(
	// 	'map person.firstName >>>',
	// 	person.firstName + ' ' + person.lastName
	// );

    const name = person.firstName + ' ' + person.lastName,

	const finallyName = {
		name
	};
	return finallyName;
});

console.log('result shortNames >>>', shortNames);

// 04 - Filter Numbers

const array = [1, 'toto', 36, 'javascript', 8];

const numbers = array.filter((element) => {
	// console.log('filter element >>>', element);
	// console.log(element, 'type is', typeof element);
	// console.log(typeof element === 'number', '-', element);
	return typeof element === 'number';
});

console.log('numbers >>>', numbers);

// 06 - cakes

const cakes = [
	{
		name: 'cake',
		flavor: 'vanilla',
		status: 'available',
	},
	{
		name: 'brownie',
		flavor: 'chocolate',
		status: 'available',
	},
	{
		name: 'pie',
		flavor: 'strawberry',
		status: 'available',
	},
	{
		name: 'muffin',
		flavor: 'pistachio',
		status: 'available',
	},
	{
		name: 'donut',
		flavor: 'chocolate',
		status: 'available',
	},
];

const filteredCakes = cakes.filter((cake) => {
	// console.log('filter cake >>>', cake);
	// console.log('filter cake.flavor >>>', cake.flavor);

	return cake.flavor === 'chocolate';
});

// console.log('result filteredCakes >>>', filteredCakes);

const unvailableCakes = filteredCakes.map((cake) => {
	// console.log('map cake >>>', cake);
	cake.status = 'is sold out!';
	// console.log('map cake >>>', cake);
	return cake;
});

console.log('Final result unvailableCakes >>>', unvailableCakes);

// BONUS - functions
function doSomething(arg) {
	console.log(arg);
	return typeof arg;
}

const doSomethingElse = (arg) => {
	console.log(arg);
	return typeof arg;
};

console.log(doSomething(8));
console.log(doSomethingElse('test'));
