var
  React = require('react'),
  { Route, IndexRoute, Redirect, IndexRedirect } = require('react-router'),
  Main = require('../components/main'),
  routes;

routes = (
  <Route path="/" component={Main}>
    <Redirect from="*" to="/" />
  </Route>
);

module.exports = routes;
