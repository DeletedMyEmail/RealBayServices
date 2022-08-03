const express = require('express');
const router = express.Router();
const con = require('../dbConnector.js').con

router.use((req, res, next) => {
    console.log(new Date().toLocaleString());
    next();
})

router.get("/search/:name/:limit", (req, res) => {
    con.query("SELECT * FROM Item WHERE ItemName LIKE ? LIMIT ?",["%"+req.params.name+"%", parseInt(req.params.limit)], (err, rows, fields) => {
        if (err) res.send(err.message);
        else res.send(rows);
    });
})

router.get("/:id", (req, res) => {
    con.query("SELECT * FROM Item WHERE ItemID=?",[req.params.id], (err, rows, fields) => {
        if (err) res.send(err.message);
        else res.send(rows[0]);
    });
})

router.get("/recommendations/:category/:amount", (req, res) => {
    var {
        amount,
        category
    } = req.params
    amount = parseInt(amount)
    switch(req.params.category) {
        case "ignore":
            con.query("SELECT * FROM Item ORDER BY AvgRating LIMIT ?", [amount], (err, rows, fields) => {
                if (err) res.send(err.message);
                else res.send(rows);
            }); 
            break
        case "foreach":
            sqlStatement = `SELECT * FROM Item WHERE Category='product' ORDER BY AvgRating LIMIT ?;
                            SELECT * FROM Item WHERE Category='service' ORDER BY AvgRating LIMIT ?;
                            SELECT * FROM Item WHERE Category='bet' ORDER BY AvgRating LIMIT ?;`
            
            con.query(sqlStatement, [amount, amount, amount], (err, rows, fields) => {
                if (err) res.send(err.message);
                else res.send(rows);
            }); 
            break
        case "service":
        case "bet":
        case "product":
            con.query("SELECT * FROM Item WHERE Category=? ORDER BY AvgRating LIMIT ?", [category, amount], (err, rows, fields) => {
                if (err) res.send(err.message);
                else res.send(rows);
            }); 
            break;
        default:
            res.send({"error":"Syntax: /recommendations/category/amount , category has to be bet, service, product, ignore or foreach"})
            return
    }
})

module.exports = router;
