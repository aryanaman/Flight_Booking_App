const express = require("express");
const router = express.Router();
const {CityController} = require("../../controllers")
const {CityMiddlewares} = require("../../middlewares")

// /api/v1/cities POST
router.post("/",
    CityMiddlewares,
    CityController.createCity
);

// /api/v1/cities GET
router.get("/",
    CityController.getCities
);

// /api/v1/city/:id GET
router.get("/:id",
    CityController.getCity
);

// /api/v1/cities/:id DELETE
router.delete("/:id",
    CityController.destroyCity
);

// /api/v1/cities/:id update
router.patch("/:id",
    CityMiddlewares,
    CityController.updateCity
);

module.exports = router;