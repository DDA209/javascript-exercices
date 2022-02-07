var fs = require('fs');

console.log("C'est parti pour la recherche :");

fs.stat('input.txt', function (err, stats) {
	if (err) {
		return console.error(err);
	}

	console.log(stats);
	console.log('Et voilà ! Voyons le résultat');

	if (stats.isFile()) {
		// simplification de  if (stats.isFile() === true)
		console.log("C'est un fichier !");
		fs.readFile('input.txt', function (error, data) {
			if (error) {
				console.error(error);
				return;
			}
			console.log('Data', typeof data);
			console.log('Lecture en différé : ' + data.toString());
		});
	}

	if (stats.isDirectory()) {
		// simplification de  if (stats.isDirectory() === true)
		console.log("C'est un dossier !");
	}
});

console.log("C'est le moment d'écrire :");

fs.writeFile('input.txt', 'Coucou bip boup', function (err) {
	if (err) {
		return console.error(err);
	}

	console.log('Et voilà ! Voyons le résultat :');

	fs.readFile('input.txt', function (err, data) {
		if (err) {
			return console.error(err);
		}

		console.log('Lecture en différé : ' + data.toString());
	});
});
