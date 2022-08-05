const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express', '4.18.1');
const app = express();
const http = require('http');
const { resourceLimits } = require('worker_threads');

const {con, query} = require('./dbConnector.js')
const {encryptString, hash} = require('./encryption.js')

const apiAddress = "http://localhost:4242/";

const fetchData = (url) => {
    const data = fetch(`${url}`)
      .then((request) => request.json())
      .then((data) => data)
  
    return data
}

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())
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

app.get('/itemSettings', function(req, res) {
    res.render("itemSettings.ejs");
});

app.get('/profileSettings', async (req, res) => {
    if (isNaN(req.cookies.SeasionID)) {
        res.redirect("/login")
        return
    }
    var userData = await query("SELECT UserName,Email,Location,Tel,Twitter,LinkedIn,Bio FROM User WHERE UserID=(SELECT UserID FROM Seasion WHERE SeasionID=?);",[parseInt(req.cookies.SeasionID)]);
    userData = userData[0]
    if (userData) {
        res.render("profileSettings.ejs", {
            Bio: userData.Bio, UserName: userData.UserName, Email: userData.Email, Twitter: userData.Twitter, 
            Tel: userData.Tel, Bio: userData.Bio, LinkedIn: userData.LinkedIn
        });
    }    
    else res.render('errorpage.ejs',{error: "Your seasion expired please sign in again"});
});

app.post("/userprofile", function(req, res) {
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

app.post("/login", async (req, res) => {
    const inputPassword = req.body.inputpasswort;
    const inputEmail = req.body.inputemail;
    const result = await query("SELECT UserName,UserID FROM User WHERE Email=? AND PwHash=?",[inputEmail, hash(inputPassword)]); 
    
    if (result[0]) {
        const newSeasionID = hash(new Date(Date.now())+result[0].UserID)
        res.cookie('SeasionID', newSeasionID, 
                { expires: new Date(Date.now() + 60000), httpOnly: false});
        
        await query("INSERT INTO Seasion VALUES(?,?)",[result[0].UserID, newSeasionID])
        res.redirect("/");
    }
    else res.render('errorpage.ejs',{error: "Incorrect username or password"});
});

app.post("/register", async (req, res) => {
    var {
        inUsername,
        inEmail,
        inSite,
        inPassword,
        inPwConfirmation
    } = req.body
    const result = await query("SELECT UserName,Email FROM User WHERE UserName=? OR Email=?",[inUsername,inEmail]); 
    console.log(result)
    if (!result[0]) {
        if(inPassword != inPwConfirmation) {
            res.render('errorpage.ejs',{error: "Passwords aren't equal"});
        }
        else {
            await query(`
            INSERT INTO User (UserName, Email, PwHash, Location)
            VALUES (?, ?, ?, ?);
            `, [inUsername, inEmail, hash(inPassword), inSite])
            res.clearCookie("SeasionID")
            res.redirect("/login");        
        }
    }
    else res.render('errorpage.ejs',{error: "Username or email already taken, please choose another one"});
});

app.listen(3000, function() {
    console.log("Server online");
});
 