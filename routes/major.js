let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    return res.render("index");
 });

router.get("/men", (req, res) => {

    return res.render("men");
});

router.get("/women", (req, res) => {
    return res.render("women");
});

router.get("/about", (req, res) => {
    return res.render("about");
});

router.get("/contact", (req, res) => {
    return res.render("contact");
});

module.exports = router;