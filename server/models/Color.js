import mongoose from "mongoose";

const ColorModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hex: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true,
},
);

export default mongoose.model('Color', ColorModel);