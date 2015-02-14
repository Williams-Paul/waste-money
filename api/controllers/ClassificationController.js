/**
 * ClassificationController
 *
 * @description :: Server-side logic for managing classifications
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  getStatistics: function(req, res) {

    Classification.find().then(function(classifications) {

      // Product.find().exec(function(err, products) {});
      return res.json({
        statistics: classifications
      });
    });

  }
};

