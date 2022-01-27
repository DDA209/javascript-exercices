// 01 - Hello World
console.log('Hello World!');

// 02 - String
var test;
test = 'My name is Patrick';
console.log(test);

// 03 - Concaténation
var name = 'Didier';
console.log('Nice to meet you ' + name);

// 04 - String Length
var testLength = "I'm very long!";
console.log(testLength.length);

// 05 - Replace
let food = 'croissant is meh';
food = food.replace('meh', 'so good');
console.log(food);

// 06 - Up an Down
let basic = 'This is Cool';
let basicUp = basic.toUpperCase();
let basicDown = basic.toLowerCase();
console.log(basic + '\n' + basicUp + '\n' + basicDown);

// 07 - Split
let word = 'banana';
let letters = word.split('');
console.log(letters);

// 08 - Template
let age = '85';
let template = `I'm ${age} years old`;
let template2 = "I'm " + age + ' years old'; // ça marche mais ça n'est pas ce qui est demandé
console.log(template);
console.log(template2); // ça marche mais ça n'est pas ce qui est demandé

// console.log(75 % 7);

// let number = 3.14;
// console.log(number);
// console.log(typeof number);

// let toText = number.toString();
// console.log(toText);
// console.log(typeof toText);

// function returnNumber(firstNumber, secondNumber) {
// 	return firstNumber % secondNumber;
// }

// // console.log(returnNumber(87, 12));

// let bigNumber = Math.max(
// 	returnNumber(45, 3),
// 	returnNumber(48, 7),
// 	returnNumber(17, 2),
// 	returnNumber(458, 4)
// );

// console.log(bigNumber);
// let num = 4.8;
// let num2 = 4;
// let num3 = 4.2;
// let num4 = 4.5;
// console.log(
// 	'Nombre = ',
// 	num,
// 	'-->',
// 	Math.floor(num),
// 	Math.ceil(num),
// 	Math.round(num)
// );
// console.log(
// 	'Nombre = ',
// 	num2,
// 	'-->',
// 	Math.floor(num2),
// 	Math.ceil(num2),
// 	Math.round(num2)
// );
// console.log(
// 	'Nombre = ',
// 	num3,
// 	'-->',
// 	Math.floor(num3),
// 	Math.ceil(num3),
// 	Math.round(num3)
// );
// console.log(
// 	'Nombre = ',
// 	num4,
// 	'-->',
// 	Math.floor(num4),
// 	Math.ceil(num4),
// 	Math.round(num4)
// );

// console.log(Math.random());

// var min = 1;
// var max = 16;

// let diceResult = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(diceResult);

// var season = 'Autumn';

// switch (season) {
// 	case 'Spring':
// 		console.log('Flowers everywhere !');
// 		break;
// 	case 'Summer':
// 		console.log("Let's go to the beach !");
// 		break;
// 	case 'Autumn':
// 		console.log('Back to school !');
// 		break;
// 	case 'Winter':
// 		console.log('Let it snow !');
// 		break;
// 	default:
// 		console.log("That's not a season...");
// }

let text = '5';
let number = 5;

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'lion'];

console.log(animals.slice(2, 4)); // donnera ['camel', 'duck']
console.log(animals.slice(3)); // donnera ['duck', 'elephant', 'lion']
