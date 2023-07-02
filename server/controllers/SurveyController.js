import Survey from "../models/Survey.js";

export const createSurvey = async (request, response) => {
  try {
    const doc = new Survey({
      pages: request.body.pages,
      showCompletedPage: request.body.showCompletedPage,
      showQuestionNumbers: request.body.showQuestionNumbers,
      completeText: request.body.completeText
    })

    const survey = await doc.save();
    response.json({ ...survey._doc });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      message: "Не удалось создать опрос"
    });
  }
}

export const getSurvey = async (request, response) => {
  try {
    const survey = await Survey.findOne();
    response.json({ ...survey._doc });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      message: "Не удалось найти опрос"
    });
  }
}