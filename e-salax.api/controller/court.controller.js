import courtService from "../services/court.service.js";

class CourtController {
  // Create new court
  async createCourt(req, res) {
    try {
      const court = await courtService.createCourt(req.body);
      res.status(201).json(court);
    } catch (err) {
      console.error("Error creating court:", err);
      res.status(500).json({ message: "Failed to create court" });
    }
  }

  // Get all courts
  async getAllCourts(req, res) {
    try {
      const courts = await courtService.getAllCourts();
      res.json(courts);
    } catch (err) {
      console.error("Error fetching courts:", err);
      res.status(500).json({ message: "Failed to fetch courts" });
    }
  }

  // Get court by ID
  async getCourtById(req, res) {
    try {
      const { id } = req.params;
      const court = await courtService.getCourtById(id);

      if (!court) {
        return res.status(404).json({ message: "Court not found" });
      }

      res.json(court);
    } catch (err) {
      console.error("Error fetching court:", err);
      res.status(500).json({ message: "Failed to fetch court" });
    }
  }

  // Update court
  async updateCourt(req, res) {
    try {
      const { id } = req.params;
      const updatedCourt = await courtService.updateCourt(id, req.body);

      if (!updatedCourt) {
        return res.status(404).json({ message: "Court not found" });
      }

      res.json(updatedCourt);
    } catch (err) {
      console.error("Error updating court:", err);
      res.status(500).json({ message: "Failed to update court" });
    }
  }

  // Delete court
  async deleteCourt(req, res) {
    try {
      const { id } = req.params;
      const deletedCourt = await courtService.deleteCourt(id);

      if (!deletedCourt) {
        return res.status(404).json({ message: "Court not found" });
      }

      res.json({ message: "Court deleted successfully" });
    } catch (err) {
      console.error("Error deleting court:", err);
      res.status(500).json({ message: "Failed to delete court" });
    }
  }
}

export default new CourtController();