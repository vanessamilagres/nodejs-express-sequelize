class Controller {
  constructor(entityService) {
    this.entityService = entityService
  }

  async getAll(req, res) {
    try {
      const allRecords = await this.entityService.getAllRecords()
      return res.status(200).json(allRecords)
    } catch (error) {
      return res.status(500).json({ message: 'Records not found' })
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params
      const oneRecord = await this.entityService.getById(id)
      return res.status(200).json(oneRecord)
    } catch (error) {
      return res.status(500).json({ message: 'User not found'})
    }
  }

  async create(req, res){
    const createdUser = req.body
    try {
      const createdRecord = await this.entityService.createUser(createdUser)
      return res.status(200).json(createdRecord)
    } catch (error) {
      return res.status(500).json({ message: 'Unable to create' })
    }
  }

  async update(req, res) {
      const { id } = req.params
      const updatedData = req.body
    try {
      const isUpdated = await this.entityService.updateRecords(updatedData, Number(id))
      if(!isUpdated){
        return res.status(400).json({ message: 'Not updated' })
      }
      return res.status(200).json({ message: 'Sucessfully updated' })
    } catch (error) {
      return res.status(500).json({ message: 'Unable to update' })
    }
  }

  async delete(req, res){
      const { id } = req.params
    try {
      const isDeleted = await this.entityService.deleteRecords(Number(id))
      return res.status(200).json({ message: 'Sucessfully deleted' })
    } catch (error) {
      return res.status(500).json({ message: 'Unable to delete' })
    }
  }
}

module.exports = Controller
