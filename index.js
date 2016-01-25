var
  app = require('./app'),
  conf = require('node-env-conf');

app.set('port', (process.env.PORT || conf.get('port') || 5000) );

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
