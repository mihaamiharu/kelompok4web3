const Sequelize = require('sequelize');
// const sequelize = new Sequelize('mysql://root:@localhost:3306/buku');

const sequelize = new Sequelize('boko','root','password',{
	host: 'localhost',
	dialect: 'mysql'
});


module.exports = sequelize;