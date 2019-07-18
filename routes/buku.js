const express = require('express');

const router = express.Router();

const bukuController = require('../controllers/buku');

router.post('/', bukuController.postBuku);

router.put('/:id', bukuController.putBuku);