class Controller {
  constructor(entityService) {
    this.entityService = entityService
  }

  async getAll(req, res) {
    try {
      const allRecords = await this.entityService.getAllRecords()
      return res.status(200).json(allRecords)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch records' })
    }
  }
}

module.exports = Controller