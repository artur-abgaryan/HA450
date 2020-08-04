var express = require('express');
var app = express();

var xsenv = require('@sap/xsenv');
/*
var service = xsenv.getServices( hana: { tag: 'hdb' } );

app.get('/', function(req, res){
	res.send('Using Hana ' + service.hana.host + ':' + service.hana.port);
});

var port = process.env.port || 3000;
app.listen(port, function(){
	console.log('myApp listen a port ' + port);
});
*/