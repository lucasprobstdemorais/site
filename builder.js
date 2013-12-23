/**
 * Require app
 */
require('./app')

// Requires
var fs = require('fs');
var builder = require('./libraries/builder')(app);

/**
 * Config
 */
var base = 'build';

/**
 * Files tree
 */

var tree = [
	//EN
	{ language: 'en-us', route: '/',                      view: 'index',      destination: '/index_en.html',                                                            urls: { en: '/index_en.html',         pt: '/' }, title: 'Getup Cloud | Scalable Cloud Application | Grow in the cloud', keywords: 'Cloud, getup, getup cloud, host sites', description: 'Getup is a scalable cloud application plataform' },
	{ language: 'en-us', route: '/technology',            view: 'technology', destination: '/technology/index.html',            partial: 'technologies/en/',            urls: { en: '/technology',            pt: '/tecnologia' }, title: 'Getup Cloud | Scalable Cloud Application | Grow in the cloud', keywords: 'Cloud, getup, getup cloud, host sites', description: 'Getup is a scalable cloud application plataform' },
	{ language: 'en-us', route: '/technology/php',        view: 'technology', destination: '/technology/php/index.html',        partial: 'technologies/en/php/',        urls: { en: '/technology/php',        pt: '/tecnologia/php' }, title: 'PHP Hosting is Getup| Getup Cloud', keywords: 'Host PHP, Cakephp, Symfony, CodeIgniter', description: 'PHP Developer - Getup is a simple way to get your PHP application in the cloud.'  },
	{ language: 'en-us', route: '/technology/ruby',       view: 'technology', destination: '/technology/ruby/index.html',       partial: 'technologies/en/ruby/',       urls: { en: '/technology/ruby',       pt: '/tecnologia/ruby' }, title: 'Ruby Hosting is Getup | Getup Cloud', keywords: 'Host Ruby, Ruby on Rails, Sinatra, Rails', description: 'Ruby Developer - Getup is a simple way to get your Ruby application in the cloud.'  },
	{ language: 'en-us', route: '/technology/nodejs',     view: 'technology', destination: '/technology/nodejs/index.html',     partial: 'technologies/en/nodejs/',     urls: { en: '/technology/nodejs',     pt: '/tecnologia/nodejs' }, title: 'Node.js is Getup | Getup Cloud', keywords: 'Host Node.js, JavaScript, Express, Stylus', description: 'Node.js Developer - Getup is a simple way to get your Node.js application in the cloud.'  },
	{ language: 'en-us', route: '/technology/python',     view: 'technology', destination: '/technology/python/index.html',     partial: 'technologies/en/python/',     urls: { en: '/technology/python',     pt: '/tecnologia/python' }, title: 'Python is Getup | Getup Cloud', keywords: 'Host Python, Django, WSGI', description: 'Python Developer - Getup is a simple way to get your Python application in the cloud.'  },
	{ language: 'en-us', route: '/technology/java',       view: 'technology', destination: '/technology/java/index.html',       partial: 'technologies/en/java/',       urls: { en: '/technology/java',       pt: '/tecnologia/java' }, title: 'Java is Getup | Getup Cloud', keywords: 'Host Java, JBoss, Tomcat, Spring, Scala/Play, Liferay', description: 'Java Developer - Getup is a simple way to get your Java application in the cloud.'  },
	{ language: 'en-us', route: '/technology/perl',       view: 'technology', destination: '/technology/perl/index.html',       partial: 'technologies/en/perl/',       urls: { en: '/technology/perl',       pt: '/tecnologia/perl' }, title: 'Perl is Getup | Getup Cloud', keywords: 'Host Perl, Aplicação Perl', description: 'Perl Developer - Getup is a simple way to get your Perl application in the cloud.'  },
	{ language: 'en-us', route: '/technology/mysql',      view: 'technology', destination: '/technology/mysql/index.html',      partial: 'technologies/en/mysql/',      urls: { en: '/technology/mysql',      pt: '/tecnologia/mysql' }, title: 'MySQL is Getup| Getup Cloud', keywords: 'MySQL, PHPMyAdmin', description: 'MySQL Developer - Getup is a simple way to get your MySQL application in the cloud.'  },
	{ language: 'en-us', route: '/technology/postgresql', view: 'technology', destination: '/technology/postgresql/index.html', partial: 'technologies/en/postgresql/', urls: { en: '/technology/postgresql', pt: '/tecnologia/postgresql' }, title: 'PostgreSQL is Getup | Getup Cloud', keywords: 'PostgreSQL ', description: 'PostgreSQL Developer - Getup is a simple way to get your PostgreSQL application in the cloud.'  },
	{ language: 'en-us', route: '/technology/mongodb',    view: 'technology', destination: '/technology/mongodb/index.html',    partial: 'technologies/en/mongodb/',    urls: { en: '/technology/mongodb',    pt: '/tecnologia/mongodb' }, title: 'MongoDB is Getup | Getup Cloud', keywords: 'NoSQL, JSON, MongoDB', description: 'MongoDB Developer - Getup is a simple way to get your MongoDB application in the cloud.'  },
	//PT
	{ language: 'pt-br', route: '/',                      view: 'index',      destination: '/index.html',                                                               urls: { en: '/index_en.html',         pt: '/' }, title: 'Getup Cloud | Hospedagem na nuvem | Grow in the cloud', keywords: 'Cloud, getup, getup cloud, nuvem, hospedagem sites', description: 'Getup é uma plataforma para hospedagem na nuvem' },
	{ language: 'pt-br', route: '/technology',            view: 'technology', destination: '/tecnologia/index.html',            partial: 'technologies/pt/',            urls: { en: '/technology',            pt: '/tecnologia' }, title: 'Getup Cloud | Hospedagem na nuvem | Grow in the cloud', keywords: 'Cloud, getup, getup cloud, nuvem, hospedagem sites', description: 'Getup é uma plataforma para hospedagem na nuvem'  },
	{ language: 'pt-br', route: '/technology/php',        view: 'technology', destination: '/tecnologia/php/index.html',        partial: 'technologies/pt/php/',        urls: { en: '/technology/php',        pt: '/tecnologia/php' }, title: 'Hospedagem PHP é na Getup. Confira as Vantagens | Getup Cloud', keywords: 'Hospedagem PHP, Cakephp, Symfony, CodeIgniter', description: 'Desenvolvedor PHP - A Getup oferece uma forma simples de hospedar suas aplicações PHP na nuvem.'  },
	{ language: 'pt-br', route: '/technology/ruby',       view: 'technology', destination: '/tecnologia/ruby/index.html',       partial: 'technologies/pt/ruby/',       urls: { en: '/technology/ruby',       pt: '/tecnologia/ruby' }, title: 'Hospedagem Ruby é na Getup. Confira as Vantagens | Getup Cloud', keywords: 'Hospedagem Ruby, Ruby on Rails, Sinatra, Rails', description: 'Desenvolvedor Ruby - A Getup oferece uma forma simples de hospedar suas aplicações Ruby na nuvem.'  },
	{ language: 'pt-br', route: '/technology/nodejs',     view: 'technology', destination: '/tecnologia/nodejs/index.html',     partial: 'technologies/pt/nodejs/',     urls: { en: '/technology/nodejs',     pt: '/tecnologia/nodejs' }, title: 'Hospedagem Node.js é na Getup. Confira as Vantagens | Getup Cloud', keywords: 'Hospedagem Node.js, JavaScript, Express, Stylus', description: 'Desenvolvedor Node.js - A Getup oferece uma forma simples de hospedar suas aplicações Node.js na nuvem.'  },
	{ language: 'pt-br', route: '/technology/python',     view: 'technology', destination: '/tecnologia/python/index.html',     partial: 'technologies/pt/python/',     urls: { en: '/technology/python',     pt: '/tecnologia/python' }, title: 'Hospedagem Python é na Getup. Confira as Vantagens | Getup Cloud', keywords: 'Hospedagem Python, Django, WSGI', description: 'Desenvolvedor Python - A Getup oferece uma forma simples de hospedar suas aplicações Python na nuvem.'  },
	{ language: 'pt-br', route: '/technology/java',       view: 'technology', destination: '/tecnologia/java/index.html',       partial: 'technologies/pt/java/',       urls: { en: '/technology/java',       pt: '/tecnologia/java' }, title: 'Hospedagem Java é na Getup. Confira as Vantagens | Getup Cloud', keywords: 'Hospedagem Java, JBoss, Tomcat, Spring, Scala/Play, Liferay', description: 'Desenvolvedor Java - A Getup oferece uma forma simples de hospedar suas aplicações Java na nuvem.'  },
	{ language: 'pt-br', route: '/technology/perl',       view: 'technology', destination: '/tecnologia/perl/index.html',       partial: 'technologies/pt/perl/',       urls: { en: '/technology/perl',       pt: '/tecnologia/perl' }, title: 'Hospedagem Perl é na Getup. Confira as Vantagens | Getup Cloud', keywords: 'Hospedagem Perl, Aplicação Perl', description: 'Desenvolvedor Perl - A Getup oferece uma forma simples de hospedar suas aplicações Perl na nuvem.'  },
	{ language: 'pt-br', route: '/technology/mysql',      view: 'technology', destination: '/tecnologia/mysql/index.html',      partial: 'technologies/pt/mysql/',      urls: { en: '/technology/mysql',      pt: '/tecnologia/mysql' }, title: 'MySQL é na Getup. Confira as Vantagens | Getup Cloud', keywords: 'MySQL, PHPMyAdmin', description: 'Desenvolvedor MySQL - A Getup oferece uma forma simples de hospedar suas aplicações MySQL na nuvem.'  },
	{ language: 'pt-br', route: '/technology/postgresql', view: 'technology', destination: '/tecnologia/postgresql/index.html', partial: 'technologies/pt/postgresql/', urls: { en: '/technology/postgresql', pt: '/tecnologia/postgresql' }, title: 'PostgreSQL é na Getup. Confira as Vantagens | Getup Cloud', keywords: 'PostgreSQL ', description: 'Desenvolvedor PostgreSQL - A Getup oferece uma forma simples de hospedar suas aplicações PostgreSQL na nuvem.'  },
	{ language: 'pt-br', route: '/technology/mongodb',    view: 'technology', destination: '/tecnologia/mongodb/index.html',    partial: 'technologies/pt/mongodb/',    urls: { en: '/technology/mongodb',    pt: '/tecnologia/mongodb' }, title: 'MongoDB é na Getup. Confira as Vantagens | Getup Cloud', keywords: 'NoSQL, JSON, MongoDB', description: 'Desenvolvedor MongoDB - A Getup oferece uma forma simples de hospedar suas aplicações MongoDB na nuvem.'  },
];

fs.mkdirSync(base);

// EN
fs.mkdirSync(base + '/technology');
fs.mkdirSync(base + '/technology/php');
fs.mkdirSync(base + '/technology/ruby');
fs.mkdirSync(base + '/technology/nodejs');
fs.mkdirSync(base + '/technology/python');
fs.mkdirSync(base + '/technology/java');
fs.mkdirSync(base + '/technology/perl');
fs.mkdirSync(base + '/technology/mysql');
fs.mkdirSync(base + '/technology/postgresql');
fs.mkdirSync(base + '/technology/mongodb');

// PT
fs.mkdirSync(base + '/tecnologia');
fs.mkdirSync(base + '/tecnologia/php');
fs.mkdirSync(base + '/tecnologia/ruby');
fs.mkdirSync(base + '/tecnologia/nodejs');
fs.mkdirSync(base + '/tecnologia/python');
fs.mkdirSync(base + '/tecnologia/java');
fs.mkdirSync(base + '/tecnologia/perl');
fs.mkdirSync(base + '/tecnologia/mysql');
fs.mkdirSync(base + '/tecnologia/postgresql');
fs.mkdirSync(base + '/tecnologia/mongodb');

/**
 *
 */
function build () {

	// Route
	var route = tree.shift();

	// Exit if route not exists
	if (!route) return false;

 	// Set language
 	gettext.textdomain(route.language.slice(0, 2));

 	// Options
	var options = {};

	// Partials
	if (route.partial) {
		var partial = 'views/partials/' + route.partial + 'index.handlebars';
		var technology = fs.readFileSync(__dirname + '/' +  partial, 'utf8');

		options.partials = { technology : technology };
	}

	// Languages URLs
	options.pt_url = route.urls.pt;
	options.en_url = route.urls.en;

	options.language = route.language;
    
    options.description = route.description;
    options.keywords = route.keywords;
    options.title = route.title;

	// Build
	builder.render(route.view, base + route.destination, options, build);
}

// 
build();

