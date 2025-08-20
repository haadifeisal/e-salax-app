import mongoose from "mongoose";

const courtSchema = new mongoose.Schema({
  courtId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  surface: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  lightning: {
    type: Boolean,
    default: false
  },
  indoors: {
    type: Boolean,
    default: false
  },
  parking: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
}, {
  versionKey: false // disables __v
});

const Court = mongoose.model("Court", courtSchema, "court");

export default Court;