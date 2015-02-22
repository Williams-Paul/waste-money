var Service = require('./Service');

var StatisticService = new Service({
  url: '/statistics'
});

module.exports = StatisticService;
