var express = require('express');
var app = express();
var bodyparse = require('body-parser');

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({
    extended: true
}));

var petRoutes = require('./routes/pet.js')(app);

var server = app.listen(3002, function () {
    console.log('Server running at http://127.0.0.1:3002')
})