var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

var Users = db.define('users', {
  username: Sequelize.STRING,
  score: Sequelize.INTEGER,
});

Users.sync();

exports.Users = Users;