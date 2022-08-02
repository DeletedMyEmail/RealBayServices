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

router.get("/recommendations/:category/:amount/", (req, res) => {
    console.log(req.params)
    if (['all', 'service', 'bet', 'product'].includes(req.params.category)) {
        if (req.params.category == "all") {
            con.query("SELECT * FROM Item ORDER BY AvgRating LIMIT ?",[parseInt(req.params.amount)], (err, rows, fields) => {
                if (err) res.send(err.message);
                else res.send(rows);
            });    
        }
        else {
            con.query("SELECT * FROM Item WHERE Category=? ORDER BY AvgRating LIMIT ?",[req.params.category,parseInt(req.params.amount)], (err, rows, fields) => {
                if (err) res.send(err.message);
                else res.send(rows);
            });    
        }
    }
    else {
        res.send({"error":"Syntax: /recommendations/category/amount , category has to be bet, service, product or all"})
    }
})

module.exports = router;
