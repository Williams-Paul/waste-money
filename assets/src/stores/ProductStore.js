/**
 * Product Store
 */

var Fluxy = require("fluxy"),
  $ = Fluxy.$,
  ProductConstants = require("../constants/ProductConstants");

var ProductStore = Fluxy.createStore({
  name: 'ProductStore',

  getInitialState: function() {
    return {
      products: {}
    }
  },

  actions: [
    [ProductConstants.PRODUCT_LIST_COMPLETED, function(products) {
      var obj = {};

      products.map(function (product) {
        obj[product.id] = product
      });

      this.setFromJS('products', obj);
    }],

    [ProductConstants.PRODUCT_CREATE_COMPLETED, function(product) {
      this.set(['products', product.id], product);
    }],

    [ProductConstants.PRODUCT_DESTROY_COMPLETED, function(product) {
      var products = this.get('products').remove(product.id);
      this.set('products', products);
    }]
  ]
});

module.exports = ProductStore;
