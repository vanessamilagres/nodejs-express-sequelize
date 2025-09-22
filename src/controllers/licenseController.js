const Controller = require('./controller.js')
const LicenseServices = require('../services/licenseServices.js')

const licenseServices = new LicenseServices()

class LicenseController extends Controller {
  constructor() {
    super(licenseServices)
  }
}

module.exports = LicenseController