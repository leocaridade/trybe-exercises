// src/app.js
const express = require('express');

const app = express();

app.use(express.json());

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
  ];

const OK = 200;
const CREATED = 201;

app.get('/', (req, res) => res.status(OK).json({ message: 'Olá Mundo!' }));

app.get('/teams', (req, res) => res.status(OK).json({ teams }));

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const team = teams.filter((t) => t.id === Number(id));

  team.name = name;
  team.initials = initials;
  res.status(200).json({ team });
});

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(CREATED).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;