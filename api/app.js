var express = require('express');
const app = express();
var path = require('path');
var logger = require('morgan');
require('./src/config/database');

const usersRouter = require('./src/app/routes/users');
const notesRouter = require('./src/app/routes/notes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;
