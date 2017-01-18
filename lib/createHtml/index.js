let 
	fs = require('fs'),
	pathToProgect = require('../createPath').pathToProgect;

module.exports = () => {
	let pathToFile = `${pathToProgect}/index.html`;

	fs.stat(pathToFile, (err) => {
		if (err !== null && err.code === 'ENOENT') {	
			fs.writeFile(pathToFile, require('./htmlText'), (err) => {
				if (err) {
					throw err;
				} 
				console.log(`${pathToFile} was creating`);
			});
		}
	});
}