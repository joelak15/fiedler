var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Employe = require('./employe');

router.get('/', function (req, res) {
    Employe.getemployes(function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res) {
    Employe.createemploye(req.body, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            req.body.id = count.insertId;
            res.json(req.body);
        }
    });
});

router.post('/delete', function (req, res) {
    Employe.deleteemploye(req.body, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json({});
        }
    });
});

module.exports = router;