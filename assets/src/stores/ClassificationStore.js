/**
 * Classifications Store
 */

var Fluxy = require("fluxy"),
  $ = Fluxy.$,
  ClassificationConstants = require("../constants/ClassificationConstants");

var ClassificationStore = Fluxy.createStore({
  name: 'ClassificationStore',

  getInitialState: function() {
    return {
      classifications: {}
    }
  },

  actions: [
    [ClassificationConstants.CLASSIFICATION_LIST_COMPLETED, function(classifications) {
      var obj = {};

      classifications.map(function (classification) {
        obj[classification.id] = classification
      });

      this.setFromJS('classifications', obj);
    }],

    [ClassificationConstants.CLASSIFICATION_CREATE_COMPLETED, function(classification) {
      this.set(['classifications', classification.id], classification);
    }],

    [ClassificationConstants.CLASSIFICATION_DESTROY_COMPLETED, function(classification) {
      var classifications = this.get('classifications').remove(classification.id);
      this.set('classifications', classifications);
    }]
  ]
});

module.exports = ClassificationStore;
