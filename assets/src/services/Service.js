var Promise = require('bluebird');
var superagent = require('superagent');
var Fluxy = require('fluxy');

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

function Service(options) {
  var service = this;

  service.url = options.url || 'api';
  service.oneUrl = service.url.charAt(service.url.length - 1) == '/' ?
    service.url :
    service.url + '/';
}

Service.prototype.one = function(id) {
  return superagent
    .get(this.oneUrl + id)
    .accept('json')
    .type('json')
    .promise();
}

Service.prototype.list = function(query) {
  return superagent
    .get(this.url)
    .query(query || null)
    .accept('json')
    .type('json')
    .promise();
}

Service.prototype.create = function(data) {
  return superagent
    .post(this.url)
    .accept('json')
    .type('json')
    .send(data)
    .promise();
};

Service.prototype.destroy = function(id) {
  return superagent
    .del(this.oneUrl + id)
    .accept('json')
    .type('json')
    .promise();
};
Service.prototype.update = function(id, data) {
  return superagent
    .post(this.oneUrl + id)
    .accept('json')
    .type('json')
    .send(data)
    .promise();
};

module.exports = Service;
