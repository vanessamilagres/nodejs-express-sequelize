const express = require('express')
const PeopleController = require('../controllers/peopleController.js')

const pessoaController = new PessoaController();

const routes = express.Router()

routes
  .get('/people', (req, res) => peopleController.getAll(req, res))
  // .get('/people/:id', peopleController.getPersonById)
  // .post('/people', peopleController.createPerson)
  // .put('/people/:id', peopleController.updatePerson)
  // .delete('/people/:id', peopleController.deletePerson)

module.exports = routes