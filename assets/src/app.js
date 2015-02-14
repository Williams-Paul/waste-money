/**
 * app @file
 */

require('es5-shim');

var Fluxy = require('fluxy');
var React = require('react');
var Router = require('react-router');
var routes = require('./components/Routes.jsx');

ImmutableProxy = require('fluxy/lib/collections/ImmutableProxy');
Fluxy.setCollectionProxyType(ImmutableProxy);

Fluxy.bootstrap('__fluxy__');

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});
