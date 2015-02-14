/**
 * ProductService
 */

var Promise = require('bluebird');
var superagent = require('superagent');
var Fluxy = require('fluxy');
var url = '/product/';

/*
 * monkey patch superagent to make it promise-able
 */
superagent.Request.prototype.promise = function () {
  var token = Promise.defer();
  this.end(function (err, res) {
    if (err) { return token.reject(err); }
    if (res.status !== 200) {
      if (res.body && res.body.error) {
        token.reject(res.body);
      }
      else {
        token.reject(res.error);
      }
    }
    else {
      token.resolve(res.body);
    }
  });
  return token.promise;
};

ProductService = {
  one: function (id) {
    return superagent
      .get(url + id)
      .accept('json')
      .type('json')
      .promise();
  },

  list: function() {
    return superagent
      .get(url)
      .accept('json')
      .type('json')
      .promise();
  },
  create: function(data) {
    return superagent
      .post(url)
      .accept('json')
      .type('json')
      .send(data)
      .promise();
  },

  update: function (id, agreement) {
    return superagent
      .post(url + id)
      .accept('json')
      .type('json')
      .send(agreement)
      .promise();
  },

  destroy: function (id) {
    return superagent
      .del(url + id)
      .accept('json')
      .type('json')
      .promise();
  }
};

module.exports = ProductService;