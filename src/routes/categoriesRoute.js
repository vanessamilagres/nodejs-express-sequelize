const express = require('express')
const CategoryController = require('../controllers/categoryController.js');

const categoryController = new CategoryController();

const routes = express.Router()

routes
  .get('/categories', (req, res) => categoryController.getAll(req, res))
  .get('/categories/:id', (req, res) => categoryController.getById(req, res))
  .post('/categories', (req, res) => categoryController.create(req, res))
  .put('/categories/:id', (req, res) => categoryController.update(req, res))
  .delete('/categories/:id', (req, res) => categoryController.delete(req, res))

module.exports = routes