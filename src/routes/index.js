const express = require('express')
const people = require('./peopleRoute.js')
const categories = require('./categoriesRoute.js')
const courses = require('./coursesRoute.js')

const routes = (app) => {
  app.use(
    express.json(),
    people,
    categories,
    courses
  )
}

module.exports = routes
