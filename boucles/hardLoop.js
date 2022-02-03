// 02 - Max
let numbers = [];
let elementQuantity = 50;
let min = 50;
let max = 200;

for (let i = 1; i <= elementQuantity; i++) {
	// console.log(i);
	let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
	numbers.push(randomNumber);
}

console.log(numbers);

let maxNumber = 0;

for (let i = 0; i < numbers.length; i++) {
	// console.log('maxNumber', maxNumber);
	// console.log('numbers[i]', numbers[i]);

	if (numbers[i] > maxNumber) {
		// console.log('change maxNumber');
		maxNumber = numbers[i];
	}
}

console.log('maxNumber is', maxNumber);
