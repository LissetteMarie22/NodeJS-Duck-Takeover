var express = require('express');
var quack = express();
var exec = require('child_process');
var cmd = 'ifconfig | tee -a top.html';
var nrc = require('node-cmd');
var html = require('html');
var fs = require('fs');
var path = require ('path');
var htmlPath = path.join(__dirname, 'top');
var connect = require('connect');
quack.use(express.static(htmlPath));

var server = quack.listen(3280, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log("Ducks have successfully taken over http://" + host + ":" + port + "/");
});
server.listen(3280, '127.0.0.1');



quack.get('/top', function(req,res){
	res.sendFile(htmlPath + '/' + 'top.html');
	
});
nrc.get(cmd, function(err, data, stderr){
	
	
});