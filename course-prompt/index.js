var prompt = require('prompt');

prompt.start(); // démarre le prompt

function onErr(err) {
	// permet de gérer les erreurs
	console.log(err);
	return;
}

prompt.get(['name'], function (err, res) {
	// demande à obtenir les propriétés "username" et "email"
	console.log('err -->', err);
	console.log('res -->', res);

	if (err) {
		console.log('console.log', err);
		return onErr('return ' + err);
	}

	console.log('Données reçues :');
	console.log('=> Username : ' + res.username); // affiche le résultat pour la propriété "username"
	console.log('=> Email : ' + res.email); // affiche le résultat pour la propriété "email"
});

var properties = [
	{
		name: 'username',
		validator: /^[a-zA-Z\s\-]+$/, // Regex de validation : lettres maj / min, espaces et tirets
		warning:
			'Le username ne doit contenir que des lettres, espaces et tirets',
	},
	{
		name: 'password',
		hidden: true, // n'affichera pas la saisie de l'utilisateur à l'écran
	},
];

prompt.start(); // démarre le prompt

function onErr(err) {
	// permet de gérer les erreurs
	console.log(err);
	return 1;
}

prompt.get(properties, function (err, res) {
	if (err) {
		return onErr(err);
	}

	console.log('Données reçues :');
	console.log('=> Username : ' + res.username);
	console.log('=> Password : ' + res.password);
});
