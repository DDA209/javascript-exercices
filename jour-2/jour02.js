// 01 -Number
let integer = 102;
let integer;
integer = 102;

let float = 13.9;

console.log(integer);
console.log(float);

// 02 - Convert
let basic = 34;
let stringified = basic.toString();
console.log(stringified, 'is a', typeof stringified);
console.log(basic, 'is a', typeof basic);
console.log(stringified + '');

// 03 - Round
let num = 1153454.654684844;
let rounded = Math.round(num);
console.log(rounded);

// 04 - Arithmétique
let test = 12;
let bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);
console.log('-----------');
console.log((test += bis));
console.log((test -= bis));
console.log((test *= bis));
console.log((test /= bis));
console.log((test **= bis));
console.log((test %= bis));

// 05 - Comparaison
let test = 143;
let bis = 219;
console.log(test, '>', bis, '-->', test > bis);
console.log(test, '<', bis, '-->', test < bis);
console.log(test, '>=', bis, '-->', test >= bis);
console.log(test, '>=', bis, '-->', test >= bis);
console.log(test, '!==', bis, '-->', test !== bis);
console.log(test, '===', bis, '-->', test === bis);
console.log(test, '!=', bis, '-->', test != bis);
console.log(test, '==', bis, '-->', test == bis);

// 06 - Condition
let limit = 50;
let score = 80;

console.log('before if -->', score >= limit);
if (score >= limit) {
	console.log('Ok good!');
} else {
	console.log('oh nooo...');
}

// 07 - Condition II
let password = 'azerty';

if (password.length > 5) {
	console.log('The password is secured');
}

// 08 - Condition III

console.log(
	'score >= limit && password.length > 5 -->',
	score >= limit && password.length > 5
);

if (score >= limit && password.length > 5) {
	console.log('Everything is good');
} else if (score >= limit || password.length > 5) {
	console.log('Something is good');
} else if (score < limit && password.length <= 5) {
	console.log('Nothing is good');
} else {
	console.error("This case isn't taken into account");
}
