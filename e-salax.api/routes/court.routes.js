import express from "express";
import courtController from "../controller/court.controller.js";

const router = express.Router();

// Create new court
router.post("/", (req, res) => courtController.createCourt(req, res));

// Get all courts
router.get("/", (req, res) => courtController.getAllCourts(req, res));

// Get court by ID
router.get("/:id", (req, res) => courtController.getCourtById(req, res));

// Update court
router.put("/:id", (req, res) => courtController.updateCourt(req, res));

// Delete court
router.delete("/:id", (req, res) => courtController.deleteCourt(req, res));

export default router;