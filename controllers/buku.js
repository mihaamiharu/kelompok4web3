const Buku = require('../models/buku');

module.exports.postBuku = (req, res) => {
    Buku.create({
        judul: req.body.judul,
        penulis: req.body.penulis,
        penerbit: req.body.penerbit,
        tahun_terbit: req.body.tahun_terbit
    }).then((buku)=>{
        res.json(buku);
    }).catch((error)=>{
        throw error;
    })
}

module.exports.putBuku = (req, res) => {
    Buku.update({
        judul: req.body.judul,
        penulis: req.body.penulis,
        penerbit: req.body.penerbit,
        tahun_terbit: req.body.tahun_terbit
    },
    {where:{
        id: req.params.id
    }
    }).then((buku) =>{
        res.json(buku);
    }).catch((error)=>{
        throw error;
    })
}

module.exports.deleteBuku = (req,res) => {
    Product.destroy({
    
    where: {
        id: req.params.id
    }
    }).then((product) => {
        res.json(buku);
    }).catch((error) => {
        throw error;
    })
}


module.exports.cariJudul = (req, res) => {
    Buku.findAll({
        where:{
            judul:req.params.judul
        }
    }).then((buku)=>{
        res.json(buku);
    }).catch((error)=>{
        throw error;
    });
}
module.exports.cariPenerbit = (req, res) => {
    Buku.findAll({
        where:{
            penerbit:req.params.penerbit
        }
    }).then((buku)=>{
        res.json(buku);
    }).catch((error)=>{
        throw error;
    });
}

module.exports.cariTahun = (req, res) => {
    Buku.findAll({
        where:{
            tahun_terbit:req.params.tahun_terbit
        }
    }).then((buku)=>{
        res.json(buku);
    }).catch((error)=>{
        throw error;
    });
}
module.exports.cariPenulis = (req, res) => {
    Buku.findAll({
        where:{
            penulis:req.params.penulis
        }
    }).then((buku)=>{
        res.json(buku);
    }).catch((error)=>{
        throw error;
    });
}
