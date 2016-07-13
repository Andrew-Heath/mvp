var Users = require('../db').Users;
var Sequelize = require('sequelize');

module.exports = {
  users: {
    get: function (req, res) {
      res.header(defaultCorsHeaders);
      User.findAll()
        .then(function(users) {
          res.json(users);
        });
    },
    post: function (req, res) {
      res.header(defaultCorsHeaders);
      Users.findOrCreate({where: {username: req.body.username}})
      .spread(function(user, created) {
        res.sendStatus(200);
      });
    },

    options: function(req, res) {
      res.header(defaultCorsHeaders);
      res.set(200).send();
    }
  }
};

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};
