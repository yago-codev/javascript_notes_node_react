const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

require('./src/config/database');

const usersRouter = require('./src/app/routes/users');
const notesRouter = require('./src/app/routes/notes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;
