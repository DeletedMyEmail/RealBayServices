const express = require('express');
const router = express.Router();
const dbConnector = require('../dbConnector.js')
const con = dbConnector.con;

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

router.get("/search/:name", (req, res) => {

})

router.get("/:id", (req, res) => {
    console.log(req.params);  
    con.query("SELECT UserName FROM User WHERE UserID=?",[req.params.id], (err, rows, fields) => {
        
        if (err) res.send(err.message);
        else res.send(rows[0].UserName);
    });
})

module.exports = router;