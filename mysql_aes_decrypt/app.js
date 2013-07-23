var crypto = require('crypto');

function convertCryptKey(strKey) {
	var newKey = new Buffer([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	strKey = new Buffer(strKey);
	for(var i=0;i<strKey.length;i++) newKey[i%16]^=strKey[i];
	return newKey;
}

var c = crypto.createCipheriv("aes-128-ecb", convertCryptKey("myPassword"), "");
var crypted = c.update('ZeBeVogue別館', 'utf8', 'hex') + c.final('hex');
console.log(crypted.toUpperCase());


var dc = crypto.createDecipheriv("aes-128-ecb", convertCryptKey("myPassword"), "");
var decrypted = dc.update(crypted.toUpperCase(), 'hex', 'utf8') + dc.final('utf8');
console.log(decrypted);

dc = crypto.createDecipheriv("aes-128-ecb", convertCryptKey("myPassword"), "");
var decrypted = dc.update('5CDF7EEA93FA43B5E7757BABA610EE3F', 'hex', 'utf8') + dc.final('utf8');
console.log(decrypted);
