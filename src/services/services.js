const  dataSource = require('../models')

class Services {
  constructor(modelName) {
    this.model = modelName
  }

  async getAllRecords() {
    return dataSource[this.model].findAll()
  }

  async getById(id){
    return dataSource[this.model].findByPk(id)
  }

  async createUser(createdUser){
    return dataSource[this.model].create(createdUser)
  }

  async updateRecords(updatedData, id){
    const updatedRecords = dataSource[this.model].update(updatedData, {
      where: { id: id }
    })
    if(updatedRecords[0] === 0){
      return false
    }
    return true
  }

  async deleteRecords(id){
    return dataSource[this.model].destroy({
      where: { id: id }
    })
  }
}

module.exports = Services