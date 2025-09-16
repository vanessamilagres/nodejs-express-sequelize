const express = require('express')
const people = require('./peopleRoute.js')

const routes = (app) => {
  app.use(
    express.json(),
    people
  )
}

module.exports = routes
