const db = require('./../1.database/index')

module.exports = {
    getAllData : (req,res) => {
        db.query(`select username as nama, k.nama as kelas 
                  from conn_user_kelas as c
                  join users u on id_user = u.id 
                  join kelas k on id_kelas = k.id`,(err,result) => {
                      if(err)throw err
                      if(result){
                        res.send(result)
                      }
                  })
    },
    getDataByClass : (req,res) => {
        db.query(`select username as nama, k.nama as kelas 
        from conn_user_kelas as c
        join users u on id_user = u.id 
        join kelas k on id_kelas = k.id where k.id = ${req.params.idkelas}`,(err,result) => {
            if(err)throw err
            if(result){
              res.send(result)
            }
        })

    },
    getDataByUser : (req,res) => {

    },
    addNewUser : (req,res) => {
        var dataUser = {
            username : req.body.username,
            password : req.body.password
        }
        var kelas = req.body.kelas
        db.query('insert into users set ?' , dataUser , (err,result) => {
            if(err) throw err
            db.query(`select id from users where username = '${dataUser.username}'`, (err,result1) =>{
                if(err) throw err
                var sql = 'insert into conn_user_kelas set ?'
                var obj = {id_user : result1[0].id , id_kelas : kelas}
                db.query( sql, obj, (err,result2) =>{
                    if(err) throw err
                    res.redirect('/api/allData')
                })
            })
        })
    }
}




// get semua user dan kelas
// tampilkan data kelas
// tampilkan data user

// nambahin kelas baru
// nambahin user dan kelas
// nambahin user yang sudah ada ke kelas

// mindahin user ke kelas lain
// ganti nama kelas

// delete user dari kelas tertentu
// delete kelas