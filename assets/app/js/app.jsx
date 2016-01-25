var
  React = require('react'),
  ReactDOM = require('react-dom'),
  { Router } = require('react-router'),
  history = require('../../common/js/routes/history_factory').create(),
  routes = require('./routes');

history.listen((location) => {});

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
