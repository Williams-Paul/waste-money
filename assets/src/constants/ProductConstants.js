/**
 * ProductConstant
 */

var Fluxy = require("fluxy");

var ProductConstant = Fluxy.createConstants({
  serviceMessages: [
    'PRODUCT_LIST',
    'PRODUCT_CREATE',
    'PRODUCT_UPDATE',
    'PRODUCT_DESTROY'
  ]
});

module.exports = ProductConstant;
