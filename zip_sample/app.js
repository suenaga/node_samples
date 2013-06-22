var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, 'binary', function(err, data) {
	if (err) throw err;
	var zip = new require('node-zip')(data, {base64: false, checkCRC32: true});
	for (var i in zip.files) {
		for (var j in zip.files[i]) {
			if (j !== 'data') {
				console.log(j + ':', zip.files[i][j]);
			}
		}
	}
});


