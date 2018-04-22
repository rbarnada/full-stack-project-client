'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onAddRun = function (event) {
  event.preventDefault()
  // console.log('button pressed')
  const data = getFormFields(event.target)
  api.addRun(data)
    .then(ui.addRunSuccess)
    .catch(ui.addRunFailure)
}

const onIndexRuns = function (event) {
  event.preventDefault()
  // console.log('button pressed')
  api.indexRuns()
    .then(ui.indexRunsSuccess)
    .catch(ui.indexRunsFailure)
}

const onDeleteRun = function (event) {
  event.preventDefault()
  store.runId = $(event.target).data().id
  // console.log(store.runId)
  api.deleteRun()
    .then(function () { console.log('success') })
    .catch(function () { console.log('failure') })
}

const addHandlers = function () {
  $('#add-run').on('submit', onAddRun)
  $('#index-run').on('submit', onIndexRuns)
  $('#run-display').on('submit', '.delete-run', onDeleteRun)
}

module.exports = {
  addHandlers
}
