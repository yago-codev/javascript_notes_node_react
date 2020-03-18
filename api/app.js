var express = require('express');
var path = require('path');
var logger = require('morgan');
require('./src/config/database');

var usersRouter = require('./src/app/routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

module.exports = app;
