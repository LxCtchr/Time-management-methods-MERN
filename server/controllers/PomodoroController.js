import Pomodoro from "../models/Pomodoro.js";
import PomodoroTasks from "../models/PomodoroTasks.js";

export const create = async (request, response) => {
  try {
    const tasks = await PomodoroTasks.findOne().populate('user');
    const doc = new Pomodoro({
      tasks: tasks,
    })
    const method = await doc.save();
    response.json({ ...method._doc });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      message: "Не удалось создать"
    });
  }
}

export const getTasks = async (request, response) => {
  try {
    const result = await Pomodoro.find().populate('user');
    response.json({ ...result });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      message: "Не удалось вернуть задачи"
    });
  }
}