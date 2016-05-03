var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/cat', function (req, res) {
	res.send('Meow');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});