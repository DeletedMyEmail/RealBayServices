const express = require('express');
const router = express.Router();
const con = require('../dbConnector.js').con

router.use((req, res, next) => {
    console.log(new Date().toLocaleString());
    next();
})

router.get("/search/:name", (req, res) => {
    con.query("SELECT * FROM Item WHERE ItemName LIKE ?",["%"+req.params.name+"%"], (err, rows, fields) => {
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

module.exports = router;