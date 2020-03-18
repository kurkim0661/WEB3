var express = require('express');
var app = express();
//var url = require('url');
var querystring = require('querystring');
var http = require('http');
app.use(express.static("public"));
//console.log(app);
app.get('/', function(request, response){
	var url = request.url;
	var queryData = querystring.parse()
	console.log(request);
	
	response.send(`<h1>Hello home page</h1>
		<link rel="stylesheet" href="stylesheet.css" type="text/css">
	`);
	
});
app.get('/dynamic', function(request, response){
	var output= `
		
	`;

});
app.listen(3000, function(){
	console.log('Connected 3000 port');
});
