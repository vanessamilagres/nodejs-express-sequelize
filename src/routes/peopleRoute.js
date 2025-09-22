const express = require('express')
const PeopleController = require('../controllers/peopleController.js')
const LicenseController = require('../controllers/licenseController.js')

const peopleController = new PeopleController()
const licenseController = new LicenseController()

const routes = express.Router()

routes
  .get('/people', (req, res) => peopleController.getAll(req, res))
  .get('/people/:id', (req, res) => peopleController.getById(req, res))
  .post('/people', (req, res) => peopleController.create(req, res))
  .put('/people/:id', (req, res) => peopleController.update(req, res))
  .delete('/people/:id', (req, res) => peopleController.delete(req, res))
  .get('/people/:studentId/licenses', (req, res) => peopleController.getLicenses(req, res))
  .post('/people/:studentId/licenses', (req, res) => licenseController.create(req, res))

module.exports = routes