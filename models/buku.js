const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Buku extends Sequelize.Model {}

Buku.init({
  judul: Sequelize.STRING,
  penulis: Sequelize.STRING,
  penerbit: Sequelize.STRING,
  tahun_terbit: Sequelize.INTEGER
  
}, { sequelize, modelName: 'buku' });

module.exports = Buku;