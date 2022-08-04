const express = require('express');
const router = express.Router();
const {con, query} = require('../dbConnector.js')


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

router.get("/recommendations/:category/:amount/:minID/:maxID/:order", async (req, res) => {
    var {
        amount,
        category,
        minID,
        maxID,
        order
    } = req.params
    amount = parseInt(amount)
    if (minID == "ignore") minID = 0;
    else minID = parseInt(minID)
    if (maxID == "ignore") {
        const result = await query("SELECT MAX(ItemID) AS id FROM Item"); 
        maxID = result[0].id
    };
    if (order != "desc" && order != "asc") {
        res.send({"error":"Syntax: /recommendations/:category/:amount/:minID/:maxID/:order , order has to be 'asc' or 'desc'"})
        return
    }

    switch(req.params.category) {
        case "ignore":
            con.query("SELECT * FROM Item WHERE ItemID BETWEEN ? AND ? ORDER BY ItemID "+order+" LIMIT ?;", [minID, maxID,amount], (err, rows, fields) => {
                if (err) res.send(err.message);
                else res.send(rows);
            }); 
            break
        case "foreach":
            sqlStatement = `SELECT * FROM Item WHERE Category='product' AND ItemID BETWEEN ? AND ? ORDER BY ItemID `+order+` LIMIT ?;
                            SELECT * FROM Item WHERE Category='service' AND ItemID BETWEEN ? AND ? ORDER BY ItemID `+order+` LIMIT ?;
                            SELECT * FROM Item WHERE Category='bet' AND ItemID BETWEEN ? AND ? ORDER BY ItemID `+order+` LIMIT ?;
                            `
            
            con.query(sqlStatement, [minID, maxID, amount, minID, maxID, amount,minID, maxID, amount], (err, rows, fields) => {
                if (err) res.send(err.message);
                else res.send(rows);
            }); 
            break
        case "service":
        case "bet":
        case "product":
            con.query("SELECT * FROM Item WHERE Category=? AND ItemID BETWEEN ? AND ? ORDER BY ItemID "+order+" LIMIT ?", [category, minID, maxID, amount], (err, rows, fields) => {
                if (err) res.send(err.message);
                else res.send(rows);
            }); 
            break;
        default:
            res.send({"error":"Syntax: /recommendations/:category/:amount/:minID/:maxID/:order , category has to be bet, service, product, ignore or foreach"})
            return
    }
})

module.exports = router;
