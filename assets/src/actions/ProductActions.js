/**
 * ProductActions
 */

var Fluxy = require('fluxy'),
  ProductConstants = require("../constants/ProductConstants"),
  ProductService = require("../services/ProductService");

var ProductActions = Fluxy.createActions({
  serviceActions: {

    list: [ProductConstants.PRODUCT_LIST, function() {
      return ProductService.list(); // return promise
    }],

    create: [ProductConstants.PRODUCT_CREATE, function(data) {
      return ProductService.create(data); // return promise
    }],

    destroy: [ProductConstants.PRODUCT_DESTROY, function (id) {
      return ProductService.destroy(id);
    }]
  }
});

module.exports = ProductActions;
