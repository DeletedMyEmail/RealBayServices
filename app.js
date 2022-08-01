const bodyParser = require('body-parser');
const express = require('express', '4.18.1');
const app = express();
const http = require('http');

const apiAddress = "http://localhost:4242/";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("views"));

app.get('/', function(req, res) {
    res.render("home.ejs");
});

app.get('/profile', function(req, res) {
    res.render("profile.ejs");
});

app.get('/itempage', function(req, res) {
    res.render("itempage.ejs");
});

app.get('/login', function(req, res) {
    res.render("login.ejs");
});

app.get('/register', function(req, res) {
    res.render("register.ejs");
});

app.post("/", function(req, res) {
    console.log(req.body.searchInput);
    http.get(apiAddress+"user/"+req.body.searchInput, function(responds) 
    {
        responds.on("data", function(data) 
        {
            const userData = JSON.parse(data);
            res.send(userData);
        });
    });
});

app.post("/login", function(req, res) {
  res.redirect("/profile");
});

app.post("/register", function(req, res) {
  res.redirect("/profile");
});

app.listen(3000, function() {
    console.log("Server online");
});
