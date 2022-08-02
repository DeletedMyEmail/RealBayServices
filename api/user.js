const express = require('express');
const router = express.Router();
const con = require('../dbConnector.js').con

router.use((req, res, next) => {
    console.log(new Date().toLocaleString());
    next();
})

/* router.param("id", (req, res, next, id)=>{
    req.user = {
        "UserID": id,
        "UserName": sqlHandler.getUserNameById(id),
    }
    next();
}) */

router.get("/search/:name/:limit", (req, res) => {
    con.query("SELECT * FROM User WHERE UserName LIKE ? LIMIT ?",["%"+req.params.name+"%", parseInt(req.params.limit)], (err, rows, fields) => {
        if (err) res.send(err.message);
        else res.send(rows);
    });
})

router.get("/:id", (req, res) => {
    con.query("SELECT * FROM User WHERE UserID=?",[req.params.id], (err, rows, fields) => {
        if (err) res.send(err.message);
        else if (rows[0]) res.send(rows[0]);
        else res.send(rows);
    });
})

module.exports = router;