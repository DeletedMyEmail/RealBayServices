const bodyParser = require('body-parser');
const express = require('express', '4.18.1');
const app = express();
const http = require('http');
const apiAddress = "http://10.6.3.96:4242/";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("views"));

app.get('/', function(req, res) {
    res.render("home.ejs");
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
    http.get(apiAddress+"user/"+req.body.searchInput, function(responds)
    {
        responds.on("data", function(data)
        {
            const userData = JSON.parse(data);
            if (!Object.keys(userData).length) res.render('errorpage.ejs',{error: "Couldn't find user"});
            else if (userData) res.render("profile.ejs", {Bio: userData.Bio, UserName: userData.UserName, Email: userData.Email, Twitter: userData.Twitter, Tel: userData.Tel, Bio: userData.Bio, LinkedIn: userData.LinkedIn});
            else res.end()
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
