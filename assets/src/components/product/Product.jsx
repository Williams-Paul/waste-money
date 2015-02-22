var React = require('react'),
  ProductCustomList = require('./ProductCustomList.jsx');

var ProductStore = require('../../stores/ProductStore'),
  ProductActions = require('../../actions/ProductActions');

/**
 * Retrive the current PRODUCT
 */
function getProductState() {
  return {
    groupList: ProductStore.getGroupList()
  };
}

var Product = React.createClass({
  getInitialState: function() {
    return getProductState();
  },

  componentDidMount: function() {
    // ProductActions.groupList();
    ProductActions.list();
    ProductStore.addWatch(this._onChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeWatch(this._onChange);
  },

  render:  function() {
    return (<ProductCustomList items={this.state.groupList}/>);
  },

  _onChange: function() {
    // ProductActions.groupList();
    this.setState(getProductState());
  }
});

module.exports = Product;
