const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static(__dirname + '/public')); 
app.use(express.static(__dirname + '/views'));
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("home");
});
app.get("/contact", function (req, res) {
    res.render("contact");
});
app.get("/about", function (req, res) {
    res.render("about");
});


app.listen(3000, function () {
    console.log("Running on port 3000");
});
