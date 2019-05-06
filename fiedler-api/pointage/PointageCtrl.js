var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Pointage = require('./pointage');

router.get('/', function (req, res) {
    Pointage.getpointages(function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/pointage', function (req, res) {
    Pointage.getpointagesid(req.query, function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res) {
    Pointage.createpointage(req.body, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            req.body.idPointage = count.insertId;
            res.json(req.body);
        }
    });
});

router.post('/update', function (req, res) {
    Pointage.updatepointage(req.body, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(req.body);
        }
    });
});


module.exports = router;