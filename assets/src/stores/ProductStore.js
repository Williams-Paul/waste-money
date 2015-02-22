/**
 * Product Store
 */

var Fluxy = require("fluxy"),
  moment = require('moment');
  $ = Fluxy.$,
  ProductConstants = require("../constants/ProductConstants");

var ProductStore = Fluxy.createStore({
  name: 'ProductStore',

  getInitialState: function() {
    return {
      products: {},
      group: {}
    }
  },

  getGroupList: function () {
    var groupBy = {};
    var products = this.getAsJS('products');

    Object.keys(products).forEach(function(name) {
      var day = moment(products[name].createdAt).format('L');
      if (!groupBy[day]) groupBy[day] = [];
      groupBy[day].push(products[name]);
    });

    return groupBy;
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
    }],

    [ProductConstants.PRODUCT_GROUP_COMPLETED, function(group) {
      this.setFromJS('group', group);
    }]
  ]
});

module.exports = ProductStore;
