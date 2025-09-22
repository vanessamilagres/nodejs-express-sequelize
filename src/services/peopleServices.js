const Services = require('./services.js')

class PeopleServices extends Services {
  constructor() {
    super('People')    
  }

  async getLicensesByStudent(id) {
    const student = await super.getById(id)
    const LicensesList = await student.getLicensesClasses()
    return LicensesList
  }
}

module.exports = PeopleServices