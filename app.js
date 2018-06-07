let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let favicon = require('serve-favicon');
let session = require('express-session'); // Сессии
let MongoStore = require('connect-mongo')(session); // Хранилище сессий в монгодб


let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();



// view engine setup
app.engine('ejs', require('express-ejs-extend'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'fea',
    // Замените на что нибудь
    resave: false,
    // Пересохранять даже если нету изменений
    saveUninitialized: true,
    // Сохранять пустые сессии
    store: new MongoStore({ mongooseConnection: require('mongoose').connection })
    // Использовать монго хранилище
}));

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('404');
    err.status = 404;
    err.stack = null;
  next(err);
});

// error handler
app.use(require('./untils/errorHandler'));


module.exports = app;
