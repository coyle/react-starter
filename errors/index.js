/* jshint unused: false */

var
  conf = require('node-env-conf'),
  ENV = conf.get('NODE_ENV');

module.exports = function errors(app) {
  // catch 404 and forward to error handler
  app.use(handle404);

  app.use(handle500);
};

function handle404(req, res, next) {
  var
    err = new Error('Not Found');

  err.status = 404;
  next(err);
}

function handle500(err, req, res, next) {
  var
    error;

  res.status(err.status || 500);
  error = {
    message: err.message,
    status: err.status || 500
  };

  if (ENV === 'localhost') {
    console.log('*****', err);
    error.stacktrace = err.stack;
  }

  if (err.responseType === 'json') {
    res.json({ error: error });
  }
  else {
    res.render('error', error);
  }
}
