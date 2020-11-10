const express = require("express");

const shopController = require("./../controllers/shop");

const router = express.Router();

router.get("/", shopController.getHomePage);

router.post("/auth", shopController.addNewUser)

module.exports = router;