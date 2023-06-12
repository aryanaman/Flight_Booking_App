const express = require("express");
const router = express.Router();
const {CityController} = require("../../controllers")
const {CityMiddlewares} = require("../../middlewares")

router.post("/",
    CityMiddlewares,
    CityController.createCity)

module.exports = router;