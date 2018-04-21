'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onAddRun = function (event) {
  event.preventDefault()
  // console.log('button pressed')
  const data = getFormFields(event.target)
  api.addRun(data)
    .then(ui.addRunSuccess)
    .catch(ui.addRunFailure)
}

const addHandlers = function () {
  $('#add-run').on('submit', onAddRun)
}

module.exports = {
  addHandlers
}
