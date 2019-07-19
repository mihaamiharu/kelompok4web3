const Buku = require('../models/buku');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports.getIndexBuku = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData)=>{
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                message:'OK',
                authData: authData
            })
        }
    })
}

//Update Autentikasi
module.exports.postBuku = (req, res) => {
    jwt.verify(req.token, procces.env.SECRETKEY, (error,authData)=>{
        if(error){
            res.sendStatus(403);
        }else{
            if(authData['roles']=="admin"){
           
    let bukus ={
        judul: req.body.judul,
        penulis: req.body.penulis,
        penerbit: req.body.penerbit,
        tahun_terbit: req.body.tahun_terbit
    }
    Buku
    .create(bukus)
    .then((buku)=>{
        res.json(buku);
    })
    .catch((error)=>{
        console.log("error");
                  })
            }
             }
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

module.exports.cariSemua = (req, res) => {
    Buku
    .findAll({
    })
    .then((buku) =>{
        res.json(buku);
    })
    .catch((error) => {
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
