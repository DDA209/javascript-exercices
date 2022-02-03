var test = new Date();
console.log('test -->', test); // donnera une date de la forme : "2021-06-24T05:52:15.037Z"

var demo = Date.now();
console.log('demo -->', demo); // donnera une date en millisecondes : "1624514001632"

debugger;

var birthday = new Date('1990-06-23');
console.log('value', '1990-06-23');
console.log('birthday -->', birthday); // donera la date du 23 juin 1990 à minuit (heure GMT, donc le 22 juin 1990, 23h00 à Paris)
var dt = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
console.log(dt);

// Output:
//  2010-07-30T15:05:00.000Z

function doSomething(string) {
	console.log(string); // "Alexandre"
}

doSomething('Alexandre');
