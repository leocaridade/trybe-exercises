const express = require('express');
const isValidName = require('./middlewares/isValidName');
const isValidPrice = require('./middlewares/isValidPrice');
const isValidDescription = require('./middlewares/isValidDescription');
const isValidCreatedAt = require('./middlewares/isValidCreatedAt');
const isValidRating = require('./middlewares/isValidRating');
const isValidDifficulty = require('./middlewares/isValidDifficulty');
const generateToken = require('./utils/generateToken');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.post('/activities',
  isValidName, 
  isValidPrice,
  isValidDescription,
  isValidCreatedAt,
  isValidRating,
  isValidDifficulty,
  auth,
  (req, res) => res.status(201)
  .json({ message: 'Atividade cadastrada com sucesso!' }));

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;