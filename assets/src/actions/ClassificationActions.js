/**
 * ClassificationActions
 */

var Fluxy = require('fluxy'),
  ClassificationConstants = require("../constants/ClassificationConstants"),
  ClassificationService = require("../services/ClassificationService");

var ClassificationActions = Fluxy.createActions({
  serviceActions: {

    list: [ClassificationConstants.CLASSIFICATION_LIST, function() {
      return ClassificationService.list(); // return promise
    }],

    create: [ClassificationConstants.CLASSIFICATION_CREATE, function(data) {
      return ClassificationService.create(data); // return promise
    }]
  }
});

module.exports = ClassificationActions;
