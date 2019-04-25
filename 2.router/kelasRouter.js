const router = require('express').Router()
const controler = require('./../3.controller/kelasControler')
// get semua user dan kelas
router.get('/allData' , controler.getAllData)


// tampilkan data kelas
router.get('/dataByKelas/:idkelas' , controler.getDataByClass )


// nambahin user dan kelas
router.post('/addnewUser' , controler.addNewUser)



// tampilkan data user

// nambahin kelas baru


// nambahin user yang sudah ada ke kelas

// mindahin user ke kelas lain
// ganti nama kelas

// delete user dari kelas tertentu
// delete kelas

module.exports = router