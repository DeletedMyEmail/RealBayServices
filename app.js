const express = require('express', '4.18.1');
const bodyParser = require('body-parser');
const app = express();
const https = require('https');

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
    const searchInput = req.body.searchInput;
    res.send(searchInput);
});

app.post("/login", function(req, res) {
  res.redirect("/profile");
});

app.post("/register", function(req, res) {
  res.redirect("/profile");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server online");
});
