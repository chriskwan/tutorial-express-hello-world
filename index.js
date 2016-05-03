var express = require('express');
var app = express();

app.all('/secret', function (req, res, next) {
	console.log('Accessing the secret section ...');
	//res.send('Shhhhh'); //can't have both this and the one in the GET /secret
	next(); // pass control to the next handler
});

app.get('/secret', function (req, res) {
	res.send('Nothing to see here...');
})

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/cat', function (req, res) {
	res.send('Meow');
});

app.post('/', function (req, res) {
	res.send('Got a POST request');
});

app.put('/user', function (req, res) {
	res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
	res.send('Got a DELETE request at /user');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});