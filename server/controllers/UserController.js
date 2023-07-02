import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import { secret } from '../config.js';

import User from '../models/User.js';

export const register = async (request, response) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json(errors.array());
    }

    const password = request.body.password;
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const doc = new User({
      email: request.body.email,
      passwordHash: hash,
      login: request.body.login,
    });

    const user = await doc.save();
    
    const token = jwt.sign({
      _id: user._id,
    },
      secret,
      {
        expiresIn: '30d',
      }
    )

    const { passwordHash, ...userData } = user._doc;

    response.json({...userData, token});
  } catch (error) {
    console.log(error);
    response.status(500).json({
      message: "Не удалось зарегистрироваться"
    });
  }
};

export const login = async (request, response) => {
  try {
    const user = await User.findOne({ email: request.body.email });
    if (!user) {
      return response.status(404).json({
        message: 'Пользователь не найден',
      })
    }
    const token = jwt.sign({
      _id: user._id,
    },
      secret,
      {
        expiresIn: '30d',
      }
    );

    const isValidPass = await bcrypt.compare(request.body.password, user._doc.passwordHash);

    if (!isValidPass) {
      return response.status(400).json({
        message: 'Неверный логин или пароль',
      });
    }
    const { passwordHash, ...userData } = user._doc;
    response.json({ ...userData, token });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      message: "Не удалось авторизоваться"
    });
  }
};

export const getMe = async (request, response) => {
  try {
    const user = await User.findById(request.userId);

    if (!user) {
      return response.status(404).json({
        message: "Пользователь не найден",
      });
    }

    const { passwordHash, ...userData } = user._doc;
    response.json({ ...userData });
  } catch (error) {
    console.log(error);
    response.status(400).json({
      message: "Нет доступа"
    });
  }
};