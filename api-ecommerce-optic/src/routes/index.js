const { response } = require("express");
const express = require("express");
const router = express.Router();
const BonificationController = require("../controllers/bonificationController");

/* GET home page. */
router.get(
    "/account-bonification/countryAccount", BonificationController.index );

/* path base */
router.get("/account-bonification", (req, res) =>
    res.send("API account-bonification")
);

module.exports = router;
