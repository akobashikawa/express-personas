var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var holaRouter = require('./routes/holaRouter');
var personasRouter = require('./routes/personasRouter');

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/hola', holaRouter);
app.use('/personas', personasRouter);

module.exports = app;
