// 00 - difference between for and loops
for (let i = 50; i <= 200; i++) {
	console.log(i);
}

let j = 50;
while (j <= 200) {
	console.log(j);
	j++;
}

// 01 - Comptons

// compte 50 à 200

let start = 50;
while (start <= 200) {
	// console.log(start);
	if (start % 2 === 0) {
		console.log(start);
	}
	start++;
	// ou start = start + 1
}

// 02 - Try again
let dice = null;
let count = 0;

let min = 1;
let max = 6;

while (dice !== 6) {
	dice = Math.floor(Math.random() * (max - min + 1) + min);
	console.log('dice', dice);
	// count = count + 1
	count++;
}

console.log(count);

// 03 - Course
let usainBolt = 0,
	tysonGay = 0;

let min = 1,
	max = 10;

while (usainBolt <= 100 && tysonGay <= 100) {
	let forUsain = Math.floor(Math.random() * (max - min + 1) + min);
	let forTyson = Math.floor(Math.random() * (max - min + 1) + min);
	usainBolt += forUsain;
	tysonGay += forTyson;
}

if (usainBolt > 100 && tysonGay <= 100) {
	console.log('Usain wins');
} else if (tysonGay > 100 && usainBolt <= 100) {
	console.log('Tyson wins');
} else if (usainBolt > 100 && tysonGay > 100) {
	console.log('Everybody wins');
} else {
	console.error('An arror occured');
}
