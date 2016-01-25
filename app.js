/* jshint maxlen: 90*/

var
  conf = require('node-env-conf').init(),
  path = require('path'),

  ENV = conf.get('NODE_ENV'),

  express = require('express'),
  compression = require('compression'),
  favicon = require('serve-favicon'),
  bodyParser = require('body-parser'),

  routes = require('./routes'),
  errors = require('./errors'),

  app = express();

process.on('uncaughtException', function(err) {
  console.error('***** uncaught exception ***** \n', err.stack);
  process.exit(1);
});

// dev config
if (ENV === 'development' || ENV === 'localhost') {
  console.log('setting development environment...');

  app.use(require('errorhandler')());

  // allows requests over SSL locally with self-signed certs
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  require('bluebird').longStackTraces();
}


app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/img/yy_favicon.png'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.enable('trust proxy', true);

app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: (ENV === 'development' || ENV === 'localhost') ? 0 : (1000 * 3600 * 12)
}));

// setup routes
routes(app);

// setup error handlers
errors(app);

module.exports = app;
