var React = require('react');
var ProductActions = require('../../actions/ProductActions');

var ProductItem = React.createClass({
  render: function() {
    var product = this.props.product;

    return (
      <div className="box">
        <span
          className="glyphicon glyphicon-remove delete"
          aria-hidden="true"
          onClick={this._onDestroyClick}></span>
          {product.name}
      </div>
    );
  },

  _onDestroyClick: function () {
    ProductActions.destroy(this.props.product.id);
  }

});

module.exports = ProductItem;
