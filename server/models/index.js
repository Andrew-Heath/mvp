var db = require('../db').db;
var Sequelize = require('sequelize');

module.exports = {
  users: {
    get: function (res) {
      var queryString = 'SELECT username, currentScore FROM users';
      queryHelper(queryString, res);
    },
    post: function (data, res) {
      var queryString = 'SELECT * FROM users WHERE username="' + 
        data.username + '"';
      queryHelper(queryString, res, function(err, results) {
        if (results.length === 0) {
          queryString = 'INSERT users VALUE(0, "' + 
          data.username + '")';
          queryHelper(queryString, res);
        } else {
          res.send(results);
        }
      });
    }
  }
};

var queryHelper = function(queryString, res, cb) {
  cb = cb || function(err, results) {
    res.send({results: results});
  };
  db.query(queryString, [], cb);
};

