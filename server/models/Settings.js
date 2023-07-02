import mongoose from "mongoose";

const PomodoroSettingsModel = new mongoose.Schema({
  time: {
    type: Number,
    required: true,
  },
  shortBreak: {
    type: Number,
    required: true,
  },
  longBreak: {
    type: Number,
  },
  autoTime: {
    type: Boolean,
    required: true,
    default: false,
  },
  autoBreak: {
    type: Boolean,
    required: true,
    default: true,
  },
  pomodoro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pomodoro',
  },
}, {
  timestamps: true,
},
);

export default mongoose.model('PomodoroSettings', PomodoroSettingsModel);