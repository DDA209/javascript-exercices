var user = {
	name: 'Jane',
	gender: 'female',
	age: 25,
	isStudent: true,
	favorites: ['coffee', 'nutella', 'pizza'],
};

// console.log(user.name, user.age);
console.log(user.favorites.shift('something'));
console.log(user.favorites.length);

let keyToCheck = 'favorites';
console.log(user[keyToCheck]);
