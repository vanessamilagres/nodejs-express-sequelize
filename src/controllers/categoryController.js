const Controller = require('./controller.js')
const CategoryServices = require('../services/categoryServices.js')

const categoryServices = new CategoryServices()

class CategoryController extends Controller {
  constructor() {
    super(categoryServices)
  }
}

module.exports = CategoryController