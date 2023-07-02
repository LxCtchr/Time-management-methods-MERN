import { body } from 'express-validator';

export const registrationValidator = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль не соответствует условиям создания').matches(/^(?=.*[0-9])(?=.*[!@#$%^&*./])[a-zA-Z0-9!@#$%^&*./]{8,}$/, "i"),
  body('login', 'Логин не указан').isLength({ min: 1 }),
];