var express = require('express');
var app = express();

var EmployeCtrl = require('./employe/EmployeCtrl');
app.use('/employes', EmployeCtrl);

module.exports = app;