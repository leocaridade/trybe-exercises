const express = require('express');
const isValidName = require('./middlewares/isValidName');
const isValidPrice = require('./middlewares/isValidPrice');
const isValidDescription = require('./middlewares/isValidDescription');
const isValidCreatedAt = require('./middlewares/isValidCreatedAt');
const isValidRating = require('./middlewares/isValidRating');
const isValidDifficulty = require('./middlewares/isValidDifficulty');

const app = express();

app.use(express.json());

app.post('/activities',
  isValidName, 
  isValidPrice,
  isValidDescription,
  isValidCreatedAt,
  isValidRating,
  isValidDifficulty,
  (req, res) => res.status(201)
  .json({ message: 'Atividade cadastrada com sucesso!' }));

module.exports = app;