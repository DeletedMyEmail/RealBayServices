const express = require('express', '4.18.1');
const bodyParser = require('body-parser');
const app = express();
const https = require('https');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("views"));

app.get('/', function(req, res) {
    res.render("index.ejs");
});

app.get('/profile', function(req, res) {
    res.render("profile.ejs");
});

app.post("/", function(req, res) {
    const searchInput = req.body.searchInput;
    res.render(searchInput);
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server online");
}); 