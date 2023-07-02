import mongoose from "mongoose";

const MatrixModel = new mongoose.Schema({
  tasks: {
    type: Array,
    default: [],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
  },
  settings: {
    type: Array,
    default: [],
  }
}, {
  timestamps: true,
},
);

export default mongoose.model('Matrix', MatrixModel);