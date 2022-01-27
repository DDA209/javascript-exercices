// let a = 1000;
// let b = 0;

// while (a > b) {
// 	console.log(a, 'is greater than', b);
// 	// a = a - 1;
// 	a--;
// 	// b = b + 2;
// 	b += 2;
// }

// let max = 99;

// for (let i = 3; i <= max; i += 3) {
// 	// 1 - i = 3   ; 3 <= 100 (lance le code) ; i = 3 + 3 = 6
// 	// 2 - ------- ; 6 <= 100 (lance le code) ; i = 6 + 3 = 9
// 	// ...
// 	// 33 - ------ ; 99 <= 100 (lance le code) ; i = 99 + 3 = 102
// 	// 34 - ------ ; 102 <= 100 (arrêt de la boucle)
// 	console.log(i);
// }

// // max = 100;
// // let min = 3;

// // while (min <= max) {
// // 	// 1 -   3 <= 100
// // 	// 2 -   6 <= 100
// // 	//...
// // 	console.log(min);
// // 	min = min + 3;
// // 	// 1 - (min === 3) | min = 3 + 3 = 6
// // }

// var menu = ['salad', 'burger', 'cheese', 'dessert', 'coffee', 'digestive'];

// // je créer une boucle pour manger, mais je n'aime pas le fromage et je ne bois pas de café... Comment faire ?
// for (var index = 0; index < menu.length; index++) {
// 	if (menu[index] === 'coffee') {
// 		break; // arrête avant le console.log de "coffee"
// 	}

// 	if (menu[index] === 'cheese') {
// 		continue; // saute le console.log de "cheese"
// 	}

// 	console.log(menu[index]);
// }

function countDown(number) {
	console.log('value of number -->', number);

	if (number === 0) {
		console.log(number + ' finished !');
		return;
	}

	console.log(number);
	countDown(number - 1);
}

countDown(5);
