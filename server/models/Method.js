import mongoose from "mongoose";

const MethodModel = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  color: {
    type: String,
  },
  info: {
    type: Object,
  }
}
);

export default mongoose.model('Method', MethodModel);