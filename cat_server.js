// var http = require('http');

// http.createServer(function(req, res){
//         res.writeHead(200, {
//             'Content-Type': 'text/plain'
//         });
//         res.end('Hello World \n');
// }).listen(3000, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:3000/')

var express = require('express');
var app = express();
var bodyparse = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cats');

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({
    extended: true
}));

var cats = require('./routes/cat.js')(app);


// app.get('/', function (req, res) {
//   res.send('Hello World')
//   //res.json({hello : 'hi'})
// })

var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/')
})