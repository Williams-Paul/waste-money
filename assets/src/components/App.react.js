/** @jsx React.DOM */

var React = require('react');
var Semantic = require('react-semantify');
var Button = React.createFactory(Semantic.Button);
var Grid = React.createFactory(Semantic.Grid);
var Column = React.createFactory(Semantic.Column);

// var ProductForm = React.createFactory(require('./product/ProductForm.react'));

var App = React.createClass({
  render: function() {
   return (
    <div>
      <Button color="red" on  Click={this._onClick} oop="Deep">
        Hello World!
      </Button>
      <Grid className="examplegrid">
        <Column className="four wide"/>
        <Column className="two wide"/>
        <Column className="four wide"/>
        <Column className="six wide"/>
      </Grid>
    </div>
   ); 
  }
});

module.exports = App;