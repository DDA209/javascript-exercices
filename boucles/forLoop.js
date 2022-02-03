// 01 - Somme des carrés
let sum = 0;

for (let i = 5; i <= 10; i = i + 1 /* ou i++ */) {
	sum = sum + i * i;
}

console.log(sum);

// 02 -Comptons
let count = 0;

for (let i = 100; i <= 1000; i++) {
	if (i % 7 === 0) {
		// count = count + 1;
		// count += 1
		count++;
	}
}

console.log(count);

// 03 Chanceux
// Dice random number between 1 et 6
let min = 1;
let max = 6;
let dicesSum = 0;

for (let i = 1; i <= 20; i++) {
	let diceRoll = Math.floor(Math.random() * (max - min + 1) + min);
	if (diceRoll >= 5) {
		console.log('mon dé est :', diceRoll);
		dicesSum = dicesSum + diceRoll;
	}
}

console.log(dicesSum);

// 04 - Des boites

let box1 = 12;
let box2 = 5;

for (var i = 12; i < 14; i++) {
	//(1)  i === 12     oui    13
	//(2)  i === 13     oui    14
	//(3)  i === 14     NON

	box1 = box2;
	//(1) box1 === 5
	//(2) box1 === 17

	console.log(box1 + box2);
	//(1) ------>         5    +   5   ===  10
	//(2) ------>       17    +   17 ===  34

	box2 = box1 + i;
	//(1) box2 === 5 + 12 === 17
	//(2) box2 === 17 + 13 === 30
}

console.log('box1 -->', box1); // ---> 17
console.log('box2 -->', box2); // ---> 30
console.log('i -->', i); // ---------> 14
