const express = require('express');

const router = express.Router();

const bukuController = require('../controllers/buku');

router.post('/', bukuController.postBuku);

router.put('/:id', bukuController.putBuku);

router.delete('/:id', bukuController.deleteBuku);

//Ekki 19/07/19 Menambah routes mencari judul 
router.get('/:judul', bukuController.cariJudul);
//Ekki 19/07/19 Menambah routes mencari penulis
router.get('/writer/:penulis', bukuController.cariPenulis);

//Fabian 19/07/19 Menambah routes mencari penerbit
router.get('/author/:penerbit', bukuController.cariPenerbit);

//Reza19/07/19 Menambah routes mencari tahun buku
router.get('/:tahun_terbit', bukuController.cariTahun);


module.exports = router;