/**
 * ProductService
 */

var Service = require('./Service');

var ProductService = new Service({
  url: '/product'
});

module.exports = ProductService;
