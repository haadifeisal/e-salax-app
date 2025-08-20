import User from '../model/user.js';
import { v4 as uuidv4 } from "uuid";

class UserService {
  async createUser(data) {
      const user = new User({
      ...data,              
      userId: uuidv4(),     
      createdAt: new Date() 
    });
    
    return await user.save();
  }

  async getAllUsers() {
    try {
      const users = await User.find();
      console.log("Users fetched from DB:", users); // <-- log the actual users
      return users;
    } catch (err) {
      console.error("Error fetching users:", err);
      throw err;
    }
  }

  async getUserById(id) {
    return await User.findOne({userId: id});
  }

  async updateUser(id, data) {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
}

export default new UserService();