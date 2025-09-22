const Controller = require('./controller.js')
const PeopleServices = require('../services/peopleServices.js')

const peopleServices = new PeopleServices()

class PeopleController extends Controller {
  constructor() {
    super(peopleServices)
  }

  async getLicenses(req, res) {
    try {
      const { studentId } = req.params
      const licensesList = await peopleServices.getLicensesByStudent(Number(studentId))
      return res.status(200).json(licensesList)
    } catch (error) {
      
    }
  }
}

module.exports = PeopleController