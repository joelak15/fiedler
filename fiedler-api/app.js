var express = require('express');
var app = express();

var EmployeCtrl = require('./employe/EmployeCtrl');
var PointageCtrl = require('./pointage/PointageCtrl')

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*"),
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE'),
    res.header('Access-Control-Allow-Headers', 'Content-Type'),
    next();
})
app.use('/employes', EmployeCtrl);
app.use('/pointages', PointageCtrl);

module.exports = app;