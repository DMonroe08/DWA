const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,
	{
	host: process.env.DB_HOST,
	dialect: process.env.DB_SCHEMA,
	port: process.env.DB_PORT,
	pool: {
		max:5,
		min:0,
		idle:1000,
	},
	logging:false,
});

const url = sequelize.define('url', {
  id:{type:Sequelize.INTEGER, primaryKey:true},
	orig:{type:Sequelize.STRING, }
});

sequelize.sync();
exports.sequelize = sequelize;
exports.url = url;
