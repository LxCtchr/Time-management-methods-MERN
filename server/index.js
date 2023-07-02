import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import multer from 'multer';
import { registrationValidator } from './validations/auth.js';
import handleErrors from './utils/handleErrors.js';
import * as SurveyController from './controllers/SurveyController.js';
import * as MethodsController from './controllers/MethodsController.js';
import * as UserController from './controllers/UserController.js';
import * as PomodoroController from './controllers/PomodoroController.js';
import * as PomodoroTasksController from "./controllers/PomodoroTasksController.js"
import checkAuthentication from './utils/checkAuthentication.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('DB OK!'))
  .catch((error) => console.log('DB Error!', error));

const app = express();

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: (_, __, callback) => {
    callback(null, 'uploads')
  },
  filename: (_, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage })

app.use('/uploads', express.static('uploads'));
app.post('/upload', upload.single('image'), (request, response) => {
  response.json({
    url: `/uploads/${request.file.filename}`,
  });
})

app.post('/auth/login', handleErrors, UserController.login);
app.post('/auth/register', registrationValidator, handleErrors, UserController.register);
app.post('/auth/logout');
app.get('/auth/me', checkAuthentication, UserController.getMe);
app.post('/survey', SurveyController.createSurvey);
app.get('/survey', SurveyController.getSurvey);
app.post('/methods', MethodsController.createMethod);
app.get('/methods', MethodsController.findMethods);
app.get('/methods/:name', MethodsController.findMethodByName);
app.post('/methods/pomodoro/tasks', checkAuthentication, PomodoroController.create);
app.get('/methods/pomodoro/tasks', checkAuthentication, PomodoroController.getTasks);

app.listen(process.env.PORT || 5000, (error) => {
  if (error) {
    return console.log(error)
  }

  console.log('Server OK!');
});