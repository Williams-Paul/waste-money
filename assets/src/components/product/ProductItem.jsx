var React = require('react');
var ProductActions = require('../../actions/ProductActions');

var ProductItem = React.createClass({
  render: function() {
    var product = this.props.product;

    return (
      <li className="box-sm">
        <span
          className="glyphicon glyphicon-remove delete"
          aria-hidden="true"
          onClick={this._onDestroyClick}></span>
        <i className="fa fa-angle-right"></i> {product.name}
      </li>
    );
  },

  _onDestroyClick: function () {
    ProductActions.destroy(this.props.product.id);
  }

});

module.exports = ProductItem;
