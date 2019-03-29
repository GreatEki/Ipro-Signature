var express = require("express");

var app = express();
app.set("view engine", "ejs");

app.use("/public", express.static("public"));

//importing major routes controller
let majorRoutes = require("./routes/major");
app.use("/", majorRoutes);

app.listen(3000);
console.log("Now listening to port 3000");