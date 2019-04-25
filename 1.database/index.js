const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'jamal' ,
    password : 'jamaludin' ,
    database :'latihan_ujian' ,
    port : 3306
})

module.exports = db
