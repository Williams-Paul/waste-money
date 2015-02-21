/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var moment = require('moment');

module.exports = {

  getProducts: function (req, res) {

    console.log(req.query);

    var groupByDate = {};

    Product.find().then(function(products) {

      // Verify if query have groupBy filter
      if (req.query && req.query.groupBy) {
        var groupBy = {};

        products.forEach(function(product) {
          var day = moment(product.createdAt).format('L');
          if (!groupBy[day]) groupBy[day] = [];
          groupBy[day].push(product);
        });

        return res.json(groupBy);
      }

      return res.json(products);
    });
  }
};

