console.log('Hello.');

setTimeout(function () {
	console.log('Goodbye !');
	setTimeout(fun);
}, 1000);

console.log('Hello again !');
