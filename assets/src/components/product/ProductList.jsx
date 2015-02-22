var React = require('react');
var ReactPropTypes = React.PropTypes;
var ProductItem = require('./ProductItem.jsx');

var ProductList = React.createClass({
  propTypes: {
    items: ReactPropTypes.array.isRequired
  },
  render: function() {
    var elementList = [];
    var items = this.props.items;

    if (!items) return null;

    items.forEach(function(item) {
      elementList.push(<ProductItem key={item.id} product={item} />);
    });

    return (
      <ul id="product-list" className="list-unstyled">
        {elementList}
      </ul>
    );
  }
});

module.exports = ProductList;
