/**
 * ClassificationConstant
 */

var Fluxy = require("fluxy");

var ClassificationConstant = Fluxy.createConstants({
  serviceMessages: [
    'CLASSIFICATION_LIST',
    'CLASSIFICATION_CREATE',
    'CLASSIFICATION_UPDATE',
    'CLASSIFICATION_DESTROY'
  ]
});

module.exports = ClassificationConstant;
