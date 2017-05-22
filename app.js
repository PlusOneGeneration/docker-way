var express = require('express');
var app = express();


var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/dev');

var Cat = mongoose.model('Cat', { name: String });

app.get('/new', function(req, res){
    var kitty = new Cat({ name: 'Zildjian' });
    kitty.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('meow');
            res.json(kitty);
        }
    });
});

app.get('/', function(req, res){
    Cat.find().then(function (cats) {
        res.json(cats)
    });
});

app.listen(3000, function () {
    console.log('app started on 3000');
});

