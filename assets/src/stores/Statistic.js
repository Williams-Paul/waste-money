/**
 * statistics Store
 */

var Fluxy = require("fluxy"),
  $ = Fluxy.$,
  StatisticConstants = require("../constants/Statistic"),
  ProductStore = require('../stores/ProductStore');

var StatisticStore = Fluxy.createStore({
  name: 'StatisticStore',

  getInitialState: function() {
    return {
      statistics: {}
    }
  },

  actions: [
    [
      StatisticConstants.STATISTIC_LIST_COMPLETED,
      function(statistics) {
      var obj = {};

      statistics.map(function (statistic) {
        obj[statistic.id] = statistic
      });

      this.setFromJS('statistics', obj);
    }]
  ]
});

module.exports = StatisticStore;
