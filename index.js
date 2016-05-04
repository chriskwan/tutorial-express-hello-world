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


// A single callback function can handle a route:
app.get('/example/a', function (req, res) {
	res.send('Hello from A!');
});


// More than one callback function can handle a route:
app.get('/example/b', function (req, res, next) {
	console.log('the response will be sent by the next function ...');
	next();
}, function (req, res) {
	res.send('Hello from B!');
});


// An array of callback functions can handle a route:
var cb0 = function (req, res, next) {
	console.log('CB0');
	next();
}

var cb1 = function (req, res, next) {
	console.log('CB1');
	next();
}

var cb2 = function (req, res) {
	res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);


// A combination of independent functions and array of functions can handle a route:
var cb0 = function (req, res, next) {
	console.log('CB0');
	next();
}

var cb1 = function (req, res, next) {
	console.log('CB1');
	next();
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
	console.log('the response will be sent by the next function ...');
	next();
}, function (req, res) {
	res.send('Hello from D!');
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