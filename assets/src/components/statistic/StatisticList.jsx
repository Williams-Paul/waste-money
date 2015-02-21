var React = require('react');
var ReactPropTypes = React.PropTypes;
var StatisticItem = require('./StatisticItem.jsx');

var StatisticList = React.createClass({
  propTypes: {
    items: ReactPropTypes.object.isRequired
  },
  render: function() {

    if (this.props.items && Object.keys(this.props.items).length < 1) {
      return null;
    }

    var items = this.props.items;
    var itemElements = [];

    for (var key in items) {
      itemElements.push(<StatisticItem key={key} data={items[key]}/>);
    }

    return (
      <div>{itemElements}</div>
    );
  }
});

module.exports = StatisticList;
