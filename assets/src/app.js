/** @jsx React.DOM */

require('es5-shim');

var React = require('react');
var App = require('./components/App.jsx');

React.render(
  React.createElement(App), document.getElementById('app')
);
