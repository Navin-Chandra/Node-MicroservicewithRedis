var express = require('express');
var app = express();
var bodyparse = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dogs');

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({
    extended: true
}));

var dogs = require('./routes/dog.js')(app);

var server = app.listen(3001, function () {
    console.log('Server running at http://127.0.0.1:3001/')
})