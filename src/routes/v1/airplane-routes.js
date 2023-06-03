const express = require("express");
const router = express.Router();

const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

// it refers to /api/v1/airplanes POST
router.post("/",
    AirplaneMiddlewares,
    AirplaneController.createAirplane);

module.exports = router;
 