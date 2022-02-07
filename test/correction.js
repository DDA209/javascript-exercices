// const fs = require('fs');

// fs.readFile('./correction.txt', (err, data) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	const fileContent = data.toString();

// 	console.log(fileContent);
// });

// let array = [1, 2, 3, 4, 5];
// let double = array.map((number) => {
// 	return number * 2;
// });
// console.log(double);

// let longNames = [
// 	{
// 		firstName: 'Jane',
// 		lastName: 'Doe',
// 	},
// 	{
// 		firstName: 'John',
// 		lastName: 'Smith',
// 	},
// ];

// let shortNames = longNames.map((person) => {
// 	// console.log('person --> ', person, ' --- est de type :', typeof person);
// 	// console.log(person.firstName, person.lastName);
// 	let fullName = person.firstName + ' ' + person.lastName;
// 	// console.log(fullName);
// 	return { name: fullName };
// });

// console.log('print fullName >>>', shortNames);

// let array = [1, 'toto', 34, 'javascript', 8];
// let numbers = array.filter((element) => {
// 	console.log(
// 		'check type of element is number >>>',
// 		typeof element === 'number'
// 	);
// 	return typeof element === 'number';
// });

// console.log('print numbers >>>', numbers);

let cakes = [
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

let cakesFiltered = cakes.filter((cake) => {
	// console.log('filter cake >>>', cake);
	// console.log('filter cake is chocolate >>>', cake.flavor === 'chocolate');
	return cake.flavor === 'chocolate';
});

// console.log('print cakesFiltered >>>', cakesFiltered);

let unavailableCakes = cakesFiltered.map((cake) => {
	console.log('map cake >>>', cake);
	cake.status = 'sold out!';
	return cake;
});

console.log(unavailableCakes);
