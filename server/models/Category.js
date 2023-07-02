import mongoose from "mongoose";

const CategoryModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Color',
    required: true,
  },
}, {
  timestamps: true,
},
);

export default mongoose.model('Category', CategoryModel);