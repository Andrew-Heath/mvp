var db = require('../db').db;
var Sequelize = require('sequelize');

module.exports = {
  users: {
    get: function (res) {
      var queryString = 'SELECT username, currentScore FROM users';
      queryHelper(queryString, res);
    },
    post: function (data, res) {
        queryString = 'INSERT users VALUE(0, "' + 
        data.username + '", "' + data.score + '")';
        queryHelper(queryString, res);
      };
    }
  }
};

var queryHelper = function(queryString, res, cb) {
  cb = cb || function(err, results) {
    res.send({results: results});
  };
  db.query(queryString, [], cb);
};

