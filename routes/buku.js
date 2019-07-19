const express = require('express');

const router = express.Router();

const bukuController = require('../controllers/buku');

const auth = require('../configs/auth');

router.get('/', auth.verifyToken, bukuController.getIndexBuku);

router.post('/add', auth.verifyToken,bukuController.postBuku);

router.put('/edit/:id', auth.verifyToken,bukuController.putBuku);

router.delete('/drop/:id',auth.verifyToken,bukuController.deleteBuku);



router.get('/all', bukuController.cariSemua);
router.get('/caribuku/:id', bukuController.cariBuku);

router.get('/:judul', bukuController.cariJudul);
// router.get('/find/termahal', bukuController.orderByHarga);


router.get('/writer/:penulis', bukuController.cariPenulis);
router.get('/author/:penerbit', bukuController.cariPenerbit);
router.get('/published/:tahun_terbit', bukuController.cariTahun);


module.exports = router;