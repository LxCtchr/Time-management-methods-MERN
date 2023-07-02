import mongoose from "mongoose";

const SurveyModel = new mongoose.Schema({
  pages: {
    type: Array,
    required: true,
    default: []
  },
  showCompletedPage: {
    type: String
  },
  showQuestionNumbers: {
    type: Boolean
  },
  completeText: {
    type: String,
    required: true,
  }
}
);

export default mongoose.model('Survey', SurveyModel);