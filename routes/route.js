// console.log("hello world");
const express = require("express");
const AmbulanceController = require("../controller/Ambulance");
const fireBrigadeController = require("../controller/FireBrigade");
const loginController = require("../Controller/login");
const PoliceController = require("../controller/Police");
const signupController = require("../Controller/Singup");
const router = express.Router();

router.post("/api/singup", signupController)
router.post("/api/login", loginController)
router.post("/api/Police", PoliceController.PoliceControllerPost)
router.post("/api/Ambulance", AmbulanceController.PoliceControllerPost)
router.post("/api/firebrigade", AmbulanceController.PoliceControllerPost)
router.get("/api/Police", PoliceController.PoliceControllerget)
router.get("/api/Ambulance", AmbulanceController.PoliceControllerget)
router.get("/api/firebrigade", fireBrigadeController.PoliceControllerget)
// router.post("/api/plants", ApplicationController.Plant)
// router.get("/api/plants", ApplicationController.GetPlants)
module.exports = router;