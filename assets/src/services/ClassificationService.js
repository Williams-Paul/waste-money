/**
 * ClassificationService
 */

var Service = require('./Service');

var ClassificationService = new Service({
  url: '/classification'
});

module.exports = ClassificationService;
