var glob = require("glob");

options = null;
options = {statCache: true};
// options is optional
glob("**/*.js", options, function (er, files) {
	// files is an array of filenames.
	// If the `nonull` option is set, and nothing
	// was found, then files is ["**/*.js"]
	// er is an error object or null.
	console.log(files);
});
