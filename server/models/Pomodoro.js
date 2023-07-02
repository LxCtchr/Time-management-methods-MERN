import mongoose from "mongoose";

const PomodoroModel = new mongoose.Schema({
  tasks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PomodoroTasks',
    required: true,
  },
}
);

export default mongoose.model('Pomodoro', PomodoroModel);