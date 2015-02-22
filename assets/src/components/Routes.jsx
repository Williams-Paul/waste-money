var React = require('react'),
  Router = require('react-router'),
  {
    RouteHandler,
    Route,
    DefaultRoute
  } = Router;

var App = require('./App.jsx'),
  ClassificationCompose = require('./classification/ClassificationCompose.jsx'),
  ProductCompose = require('./product/ProductCompose.jsx');

var routes = (
  <Route name="initial" handler={App} path="/">
    <Route name="classification" handler={ClassificationCompose}/>
    <DefaultRoute handler={ProductCompose}/>
  </Route>
);

module.exports = routes;