var express = require("express");

var app = express();
app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
   return res.render("index");
});

app.listen(3000);
console.log("Now listening to port 3000");