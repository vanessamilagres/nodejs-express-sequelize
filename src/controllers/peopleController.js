const Controller = require('./controller.js')
const PeopleServices = require('../services/peopleServices.js')

const peopleServices = new PeopleServices()

class PeopleController extends Controller {
  constructor() {
    super(peopleServices)
  }
}

module.exports = PeopleController