const Controller = require('./controller.js')
const CourseServices = require('../services/courseServices.js')

const courseServices = new CourseServices()

class CourseController extends Controller {
  constructor() {
    super(courseServices)
  }
}

module.exports = CourseController