const express = require('express')
const PeopleController = require('../controllers/peopleController.js')

const peopleController = new PeopleController();

const routes = express.Router()

routes
  .get('/people', (req, res) => peopleController.getAll(req, res))
  .get('/people/:id', (req, res) => peopleController.getById(req, res))
  .post('/people', (req, res) => peopleController.createUser(req, res))
  .put('/people/:id', (req, res) => peopleController.updateUser(req, res))
  .delete('/people/:id', (req, res) => peopleController.deleteUser(req, res))

module.exports = routes