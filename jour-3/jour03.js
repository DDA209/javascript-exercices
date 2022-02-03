// 01 - Array
let fruits = ['mango', 'lemon', 'blueberry'];
console.log(fruits);
console.table(fruits);
fruits.sort();
console.log(fruits);

// 02 - Access
let ingredients = ['eggs', 'milk', 'butter'];
console.log(ingredients[1]);
console.log(ingredients.indexOf('butter'));

// 03 - Add and Remove
let objects = ['pen', 'book', 'lamp'];

objects.unshift('chair'); // 	Ajoute "chair" au début du tableau
console.log(objects);

objects.pop(); // 				Retire le dernier élément du tableau
console.log(objects);

objects.push('laptop'); // 		Ajoute "laptop" à la fin du tableau
console.log(objects);

objects.shift(); // 			Retire le premier élément du tableau
console.log(objects);

// 04 - Order
let numbers = [4, 10, 8, 12, 6];
numbers.reverse();
console.log(numbers);

numbers.sort(function (a, b) {
	// sort avec fonction
	return a - b;
});

numbers.sort((a, b) => {
	return a - b;
});

numbers.sort((a, b) => a - b);

console.log(numbers);

// 05 - Boucle
let total = 0;
let limit = 10;

for (let i = 0; i <= limit; i++) {
	total = total + i;
	console.log(`Iteration ${i}
    total === ${total}`);
}

console.log(total);

// 0.06 - Reverse

const sentence = 'N\'importe quoi "hein"'; // sentence.length - 1  === 8
//        indexes 012345678 - 9 caractères
//               "Hello"
//        indexes 01234 ---- 5 caractères
// dernier index :    longueur     - 1
//            ou : sentence.length - 1
//
let result = '';

for (let letterIndex = sentence.length - 1; letterIndex >= 0; letterIndex--) {
	// 1 -                       8      ;    8 >= 0 (code); 8 - 1 === 7
	// 2 -           XXXXXXXXXXX        ;    7 >= 0 (code)
	const letter = sentence.charAt(letterIndex);
	// 1 -         "Konexio !" le caractère à l'index letterIndex (8) est '!'
	// 2 -		   "Konexio !" le caractère à l'index letterIndex (7) est ' '

	result = result + letter;
	// 1 -  ''      +    '!'   --> result === '!'
	// 2 -  '!'     +    ' '   -->        === '! '
	// 3 -  '! '    +    'o'   -->        === '! o'
	// 4 -  '! o'   +  ...
	// x -'! oixeno'+    'k'   -->        === '! oixenok'

	// letterIndex = 7 ---> ! de sentence
	// result = result + sentence[letterIndex]
}

console.log(result);
