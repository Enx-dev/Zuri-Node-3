const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

router.get("/", controller.getAllFlights);
router.post("/add", controller.addFlight);
router.get("/:id", controller.getSingleFlight);
router.delete("/:id", controller.deleteFlight);
router.put("/:id", controller.updateFlight);
module.exports = router;
