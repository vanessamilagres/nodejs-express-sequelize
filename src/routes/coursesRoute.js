const express = require('express')
const CourseController = require('../controllers/courseController.js')

const courseController = new CourseController()

const routes = express.Router()

routes
  .get('/courses', (req, res) => courseController.getAll(req, res))
  .get('/courses/:id', (req, res) => courseController.getById(req, res))
  .post('/courses', (req, res) => courseController.create(req, res))
  .put('/courses/:id', (req, res) => courseController.update(req, res))
  .delete('/courses/:id', (req, res) => courseController.delete(req, res))

module.exports = routes