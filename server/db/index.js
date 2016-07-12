var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

var Users = db.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  currentScore: Sequelize.INTEGER,
  totalScore: Sequelize.INTEGER,
  clickPower: Sequelize.INTEGER
});

Users.hasMany(Messages);

Users.sync();

exports.Users = Users;