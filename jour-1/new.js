// console.log('Hello-world');

// déclaration
var school;

// assignation
school = 'Konexio';

// déclaration ET assignation
var city = 'Paris';

// réassignation
city = 'Marseille';

function student(firstName, lastName, age) {
	console.log(
		'hello ' + firstName + ' ' + lastName + ' ' + 'tu as ' + age + ' ans'
		//   hello prénom nomdefamille tu as 00 ans
	);
	console.log(`hello ${firstName} ${lastName} tu as ${age} ans`);
}

student('Ethan', 'Zuckerberg', 58);
student('Lies', 'Zemy', 12);
student('Didier', 'Bogosse', 0);
student('James', 'Rodriguez', 23);
student('Audrey', 'Martin', 68);
student('Tenzin', 'Martin', 150);

var age = 25;
console.log('age en number', age);
age = 'Vingt-cinq';
console.log('age en text', age);
