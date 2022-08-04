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

router.get("/recommendations/:category/:amount/:minID", (req, res) => {
    var {
        amount,
        category,
        minID
    } = req.params
    amount = parseInt(amount)
    switch(req.params.category) {
        case "ignore":
            con.query("SELECT * FROM Item WHERE ItemID > ? ORDER BY AvgRating LIMIT ?", [minID,amount], (err, rows, fields) => {
                if (err) res.send(err.message);
                else res.send(rows);
            }); 
            break
        case "foreach":
            sqlStatement = `SELECT * FROM Item WHERE Category='product' AND ItemID > ? ORDER BY AvgRating LIMIT ?;
                            SELECT * FROM Item WHERE Category='service' AND ItemID > ? ORDER BY AvgRating LIMIT ?;
                            SELECT * FROM Item WHERE Category='bet' AND ItemID > ? ORDER BY AvgRating LIMIT ?;`
            
            con.query(sqlStatement, [minID, amount, minID, amount,minID, amount], (err, rows, fields) => {
                if (err) res.send(err.message);
                else res.send(rows);
            }); 
            break
        case "service":
        case "bet":
        case "product":
            con.query("SELECT * FROM Item WHERE Category=? AND ItemID > ? ORDER BY AvgRating LIMIT ?", [category, minID, amount], (err, rows, fields) => {
                if (err) res.send(err.message);
                else res.send(rows);
            }); 
            break;
        default:
            res.send({"error":"Syntax: /recommendations/category/amount/minID , category has to be bet, service, product, ignore or foreach"})
            return
    }
})

module.exports = router;
