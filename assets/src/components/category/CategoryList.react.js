/** @jsx React.DOM */

var React = require('react');
var Bootstrap = require('react-bootstrap');
var ListGroup = React.createFactory(Bootstrap.ListGroup);
var ListGroupItem = React.createFactory(Bootstrap.ListGroupItem);
var Glyphicon = React.createFactory(Bootstrap.Glyphicon);

var CategoryList = React.createClass({
  render: function() {
    return (
      <div>
        <p>Soy una Lista de categorias!</p>
        <ListGroup>
          <ListGroupItem>Hola</ListGroupItem>
          <ListGroupItem>
            <Glyphicon glyph="bus" /> Hola 2
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
});

module.exports = CategoryList;