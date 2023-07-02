import mongoose from "mongoose";

const PomodoroTasksModel = new mongoose.Schema({
  tasks: {
    type: Array,
    default: []
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}
);

export default mongoose.model('PomodoroTasks', PomodoroTasksModel);