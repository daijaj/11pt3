var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

$.ajax({
    method: 'POST',
    url: 'https://vignette.wikia.nocookie.net/fategrandorder/images/5/5f/Will-Smith-Meme-12.png/revision/latest?cb=20171126134507',
    data: {'key': value,
           csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()},
    success: function (data) {},
    error: function (data) {}        
});