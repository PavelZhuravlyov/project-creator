let 
	fs = require('fs'),
	pathToProgect = require('../createPath').pathToProgect;

module.exports = (dirname, filename = '') => {
	let 
		pathToDir = pathToProgect + `/${dirname}/`,
		pathToFile = pathToDir + filename;

	fs.stat(pathToDir, (err) => {
		if (err !== null && err.code === 'ENOENT') {
			fs.mkdir(pathToDir, (err, folder) => {
				if (err) {
					throw err;
				}
				
				fs.writeFile(pathToFile, '', (err) => {
					if (err) {
						if (filename === '') {
							return;
						}

						throw err;
					} 
				
					console.log(`${pathToFile} was creating`);
				});
			});
		}
	});
}