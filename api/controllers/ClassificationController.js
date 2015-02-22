/**
 * ClassificationController
 *
 * @description :: Server-side logic for managing classifications
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var Promise = require('bluebird'),
  _ = require('lodash');

module.exports = {
  getStatistics: function(req, res) {

    var promises = [];
    var statistics = [];

    Classification.find().then(function(statistics) {

      statistics.forEach(function(classification) {
        var product = Product.find().where({
          classification: classification.id
        });

        promises.push(product);
      });

      Promise.settle(promises).then(function(results) {

        results.forEach(function(result, index) {
          if (result.isFulfilled()) {
            var result = result.value();

            if (result.length > 0) {

              // Add products to statistics
              statistics[index].products = statistics[index].id == result[0].classification ?
                result : [];
            }
          }
        });

        // Get total cost of the products

        statistics.forEach(function(classification, index) {
          // Set total value
          statistics[index].total = 0;

          // Get total of waste by classification
          (classification.products || []).forEach(function(product) {
            statistics[index].total += parseFloat(product.price);
          });
        });

        return res.json(statistics);

      });
    });
  }
};
