// Init App
var express  = require('express');
var app = express();

require('./models/mongoose')

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

