// Init App
var express  = require('express');
var app = express();

require('./models/mongoose')

// Passport Init
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session = require('express-session');

require('./models/mongoose.js');
require('./controllers/passport')(passport);

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express Session
app.use(session({
    secret: 'this-is-a-secret-token',
    resave: true,
    saveUninitialized: true,
    maxAge: 600000,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

module.exports.passport = passport;

// View Engine
app.set('view engine', 'ejs');

// Set Static Folder
app.use(express.static(__dirname +'/public'));

// Router
var router = require('./routes/router');
app.use(router);

// 404 page
app.use(function(req, res, next){
    res.status(404);
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
    }
});

// Set Portno
var PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log('Express listening on port ' + PORT);

