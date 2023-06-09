const express = require("express");
const router = express.Router();

const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

// /api/v1/airplanes POST
router.post("/",
    AirplaneMiddlewares,
    AirplaneController.createAirplane
);

// /api/v1/airplanes GET
router.get("/",
    AirplaneController.getAirplanes
);

// /api/v1/airplanes/:id GET
router.get("/:id",
    AirplaneController.getAirplane
);

// /api/v1/airplanes/:id DELETE
router.delete("/:id",
    AirplaneController.destroyAirplane
);

// /api/v1/airplanes/:id DELETE
router.patch("/:id",
    AirplaneMiddlewares,
    AirplaneController.updateAirplane
);
module.exports = router;
 