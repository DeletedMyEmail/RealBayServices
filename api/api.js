const express = require("express");
const app = express(); 
const cors = require("cors");

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

const userRoute = require('./user.js')
const itemRoute = require('./item.js')

app.use('/user', userRoute);
app.use('/item', itemRoute);

app.listen(4242, function() {
    console.log("API online");
});