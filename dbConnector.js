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

function query(sql, args) {
    return new Promise((resolve, reject) => {
      con.query(sql, args, (err, rows) => {
        if (err)
          return reject(err)
        resolve(rows)
      })
    })
  }

module.exports = {con, query}