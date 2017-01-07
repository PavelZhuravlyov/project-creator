let 
	createDirs = require('./createDirs'),
	createHtml = require('./createHtml');


createDirs('styles', 'style.css');
createDirs('js', 'main.js');
createDirs('img');
createHtml();
