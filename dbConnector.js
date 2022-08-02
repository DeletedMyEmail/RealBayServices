const mysql = require('mysql');

var con = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    user: "root",
    password: "sugh43-sa-!",
    database: "realbay",
    port: "3306"
});

con.connect(function(err) {
if (err) throw err;
    console.log("DB connected! ");
});

module.exports = {con}