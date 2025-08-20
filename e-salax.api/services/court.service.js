import Court from "../model/court.js";
import { v4 as uuidv4 } from "uuid";

class CourtService {
  // Create new court
  async createCourt(data) {
    const court = new Court({
      ...data,
      courtId: uuidv4(),   // generate unique courtId
      createdAt: new Date()
    });
    return await court.save();
  }

  // Get all courts
  async getAllCourts() {
    return await Court.find();
  }

  // Get court by ID (using courtId, not _id)
  async getCourtById(courtId) {
    return await Court.findOne({ courtId });
  }

  // Update court
  async updateCourt(courtId, data) {
    return await Court.findOneAndUpdate(
      { courtId },
      { ...data, updatedAt: new Date() },
      { new: true } // return updated doc
    );
  }

  // Delete court
  async deleteCourt(courtId) {
    return await Court.findOneAndDelete({ courtId });
  }
}

export default new CourtService();