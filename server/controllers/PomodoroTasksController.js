import Tasks from "../models/PomodoroTasks.js";

export const create = async (request, response) => {
  try {
    const doc = new Tasks({
      tasks: request.body.tasks,
      user: request.userId
    });

    const task = await doc.save();

    response.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось создать задачу',
    });
  }
};

export const getAll = async (request, response) => {
  try {
    const posts = await PostModel.find().populate('user');
    response.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось получить задачи',
    });
  }
};
