const express = require("express");
const router = express.Router();

const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

// /api/v1/flights POST
router.post("/",
    FlightMiddlewares,
    FlightController.createFlight
);

// // /api/v1/flights GET
// router.get("/",
//     FlightController.getFlights
// );

// // /api/v1/flights/:id GET
// router.get("/:id",
//     FlightController.getFlight
// );

// // /api/v1/flights/:id DELETE
// router.delete("/:id",
//     FlightController.destroyFlight
// );

// // /api/v1/flights/:id DELETE
// router.patch("/:id",
//     FlightMiddlewares,
//     FlightController.updateFlight
// );
module.exports = router;
 