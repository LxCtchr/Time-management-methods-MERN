import Method from "../models/Method.js";

export const createMethod = async (request, response) => {
  try {
    const doc = new Method({
      name: request.body.name,
      title: request.body.title,
      description: request.body.description,
      img: request.body.img,
      color: request.body.color,
      info: request.body.info,
    })
    const survey = await doc.save();
    response.json({ ...survey._doc });
  } catch(error) {
    console.log(error);
    response.status(500).json({
      message: "Не удалось добавить метод"
    });
  }
}

export const findMethods = async (request, response) => {
  try {
    const methods = await Method.find();
    response.json({ ...methods});
  } catch (error) {
    console.log(error);
    response.status(500).json({
      message: "Не удалось найти методы"
    });
  }
}

export const findMethodByName = async (request, response) => {
  try {
    const methodName = request.params.name;
    const method = await Method.findOne({ name: methodName });
    response.json({ ...method._doc });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      message: "Не удалось вернуть метод"
    });
  }
}