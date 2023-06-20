const express = require("express");
const router = express.Router();
const { infoController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const flightRoutes = require("./flight-routes");
const airportRoutes = require("./airport-routes")

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/flights", flightRoutes);
router.use("/airports", airportRoutes)

router.get("/info", infoController.info);

module.exports = router;
