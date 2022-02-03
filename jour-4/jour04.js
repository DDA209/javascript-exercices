// 01 - Object
let cat = {
	name: 'Garfield',
	age: 3,
	isCute: true,
};

console.log(cat);
console.log(cat.age);
console.log(cat['age']);

if (cat.isCute === true)
      true === true --> true

if (cat.isCute) {
	console.log('So cute !');
}

// 02 - Combine
let cat2 = {
	name: 'Pitch',
	age: 10,
	isCute: false,
};

const cats = [cat, cat2];

// age de cat
console.log(cats[0].age);
console.log(cats[0]['age']);
console.log(cats[1].isCute);
console.log(cats[1]['isCute']);

// 03 - Even

function checkIfEven(num) {
	if (num % 2 === 0) {
		console.log('even');
	} else {
		console.log('odd');
	}
}

let numbers = [0, 2, 85, 35.4, 36.2, 1654165464, 0153, 134543553413];

for (let i = 0; i < numbers.length; i++) {
	console.log('number testé -->', numbers[i]);
	checkIfEven(numbers[i]);
}

// 04 - Compare

function compare(num1, num2) {
	if (num1 > num2) {
		console.log('Num 1 is bigger');
		console.log(num1, 'is bigger than', num2);
	} else if (num1 < num2) {
		console.log('Num 2 is bigger');
		console.log(num2, 'is bigger than', num1);
	} else if (num1 === num2) {
		console.log('Both ar the same');
		console.log(num1, 'and', num2, 'are equal');
	} else {
		console.log('Error something happened');
	}
}

for (let i = 0; i < numbers.length; i++) {
	for (let j = 0; j < numbers.length; j++) {
		compare(numbers[i], numbers[j]);
	}
}

// 06 - Time
function format(num) {
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	hours = Math.floor(num / 3600);
	let restHours = num % 3600;
	minutes = Math.floor(restHours / 60);
	seconds = restHours % 60;
	return hours + ':' + minutes + ':' + seconds;
}

console.log(format(51478));
