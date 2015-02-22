/**
 * StatisticActions
 */

var Fluxy = require('fluxy'),
  StatisticConstants = require("../constants/Statistic"),
  StatisticService = require("../services/Statistic");

var StatisticActions = Fluxy.createActions({
  serviceActions: {
    list: [StatisticConstants.STATISTIC_LIST, function() {
      return StatisticService.list(); // return promise
    }]
  }
});

module.exports = StatisticActions;
