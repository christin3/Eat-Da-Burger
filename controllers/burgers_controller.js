/**
 * Created by Christine on 10/31/16.
 */
//import the following:
//Express
//`burger.js`

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//get and posts
router.get('/', function (req, res) {
    burger.all(function (data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/create', function (req, res) {
    burger.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function () {
        res.redirect('/');
    });
});

router.put('/update/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.update({ sleepy: req.body.sleepy }, condition, function () {
        res.redirect('/');
    });

});




//export the `router`
module.exports = router;