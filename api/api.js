const express = require("express");
const app = express(); 

const userRoute = require('./user.js')
const itemRoute = require('./item.js')

app.use('/user', userRoute);
app.use('/item', itemRoute);

app.listen(4242, function() {
    console.log("API online");
});