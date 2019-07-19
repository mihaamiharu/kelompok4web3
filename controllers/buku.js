const Buku = require('../models/Buku');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
// const Sequelize = require('sequelize');


dotenv.config();



  
module.exports.getIndexBuku = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
		if(error){
			res.sendStatus(403);
		}else{
			res.json({
				message: 'OK',
				authData: authData
})
		}
	})
}


//Update Autentikasi
module.exports.postBuku = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
        if (error){
          res.sendStatus(403);
        } else {
          if(authData['roles'] == "admin"){
          
            let bukus ={
                judul: req.body.judul,
				penulis: req.body.penulis,
				penerbit: req.body.penerbit,
				tahun_terbit: req.body.tahun_terbit,
				stock : req.body.stock,
				harga : req.body.harga
            }
            Buku
            .create(bukus)
            .then((buku) => {
				
                res.json(buku);
				
            })
            .catch((error) => {
                console.log("error");
            })  
        }
        }
    })
}

//Update Autentikasi
module.exports.putBuku = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
        if (error){
          res.sendStatus(403);
        } else {
          if(authData['roles'] == "admin"){
            let bukus ={
                judul: req.body.judul,
				penulis: req.body.penulis,
				penerbit: req.body.penerbit,
				tahun_terbit: req.body.tahun_terbit,
				stock : req.body.stock,
				harga : req.body.harga
            }
			let condition = {where:{
				id: req.params.id
				}
			}
            Buku
            .update(bukus,condition)
            .then((buku) => {
				
                res.json(buku);
				
            })
            .catch((error) => {
                console.log("error");
            })  
        }
        }
    })
    }

	
	//Update Autentikasi
module.exports.deleteBuku = (req, res) => {
   jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
        if (error){
          res.sendStatus(403);
        } else {
          if(authData['roles'] == "admin"){
            Buku
            .destroy({ where : { 
			id: req.params.id }
			
			
			})
            .then((buku) => {
				
                res.json(buku);
				
            })
            .catch((error) => {
                console.log("error");
            })  
        }
        }
    })
    }

	
	//Search by ID 
module.exports.cariBuku = (req, res) => {
    Buku.findByPk(
			req.params.id
    ).then((buku)=>{
        res.json(buku);
    }).catch((error)=>{
        throw error;
    });
}


	//Search All Books 
module.exports.cariSemua = (req, res) => {
	Buku
		.findAll({
		})
		.then((buku) => {
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
            tahun_terbit : req.params.tahun_terbit
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

// module.exports.orderByHarga = (req,res) => {
	// Buku.findAll({
        // order: [
		// include: [{model: Buku}],
			// ['harga'],
              // sequelize.fn('max', sequelize.col('harga'))
        // ]
    // }).then((buku)=>{
        // res.json(buku);
    // }).catch((error)=>{
        // throw error;
    // });
  // }
