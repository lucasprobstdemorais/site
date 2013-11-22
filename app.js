
/**
 * Module dependencies.
 */

var express = require('express');
var cons = require('./libraries/consolidate')
var Gettext = require('node-gettext');

var fs = require('fs')
var http = require('http');
var path = require('path');

//_ = require('underscore');
gettext = new Gettext();
app = express();

// load controllers
controllers = {
	main: require('./controllers/main')
};

// load routes
var routes = require('./routes');

// assign the mustache engine to .html files
app.engine('handlebars', cons.handlebars);

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// all environments config
require('./config');

// general
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());

app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

// consolidate options
cons.options({
	path: app.get('path'),
	language: app.get('language'),
	debug: app.get('debug')
});

// consolidade partials
cons.partials({
	head: 'partials/head',
	header: 'partials/header',
	footer: 'partials/footer',
	signup: 'partials/signup',
	contact: 'partials/contact'
});


// consolidate Helpers
cons.helpers(require('./helpers/consolidate'));

// gettext config
gettext.addTextdomain('pt', fs.readFileSync('./languages/pt/general.po'));

gettext.textdomain(app.get('language'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
