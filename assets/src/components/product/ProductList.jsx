var React = require('react');
var ReactPropTypes = React.PropTypes;
var ProductItem = require('./ProductItem.jsx');

var ProductList = React.createClass({
  propTypes: {
    allProducts: ReactPropTypes.object.isRequired
  },
  render: function() {


    if (this.props.allProducts && Object.keys(this.props.allProducts).length < 1) {
      return null;
    }

    var allProducts = this.props.allProducts;
    var products = [];

    for (var key in allProducts) {
      products.push(<ProductItem key={key} product={allProducts[key]} />);
    }

    return (
      <div id="product-list">{products}</div>
    );
  }
});

module.exports = ProductList;