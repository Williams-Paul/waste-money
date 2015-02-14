var React = require('react'),
  ReactPropTypes = React.PropTypes,
  jQuery = require('../../config/jquery-extends'),
  {Input} = require('react-bootstrap');

var DynamicSelect = React.createClass({

  getDefaultProps: function() {
    return {
      items: []
    };
  },

  render: function() {
    var {items, ...other} = this.props;
    var elements = [];

    if(Object.keys(items).length > 0) {
      Object.keys(items).forEach(function (item) {
        elements.push(<option
          key={items[item].id}
          value={items[item].id}>
            {items[item].name}
          </option>);
      });
    }

    return (
        <Input
          {...other}
          type="select">
          {elements}
        </Input>
    );
  }
});

module.exports = DynamicSelect;
