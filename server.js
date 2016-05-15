// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');

var async		 = require('async');
var flash		 = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var browserSync  = require('browser-sync');

// DB configuration ===============================================================
//mongod -f /Users/lms/mongodb/mongod.conf
var db = mongoose.connect('mongodb://localhost/MeanStart'); 

// set up our express application
app.use('/static', express.static( './static'));
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies 
app.use(bodyParser()); // get information from html forms

app.engine('.html', require('ejs').__express); // sets the HTML templating to EJS
app.set('views', __dirname + '/views'); //sets the views directory to the apps views
app.set('view engine', 'html');

// routes ======================================================================
require('./app/routes.js')(app); // load our routes and pass in our app

// launch ======================================================================
app.listen(port, listening);

//browser sync
function listening () {
  browserSync({
  	browser: "google chrome",
  	notify: false,
    proxy: 'localhost:' + port,
    files: ['static/**/*.{js,css}']
  });
  console.log('\n'+'========= The magic happens on port ' + port + ' =========' + '\n');
}