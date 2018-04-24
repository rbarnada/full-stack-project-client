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
  $('#update-run')[0].reset()
  $('#add-run')[0].reset()
}

const onIndexRuns = function (event) {
  event.preventDefault()
  $('#run-display').text('')
  // console.log('button pressed')
  api.indexRuns()
    .then(ui.indexRunsSuccess)
    .catch(ui.indexRunsFailure)
}

const onDeleteRun = function (event) {
  event.preventDefault()
  store.runId = $(event.target).data().id
  store.fade = $(event.target).parent()
  // store.fade = $(event.target).parent().fadeOut()
  // const currentId = $(event.target)[0].id
  // console.log(store.runId)
  if (confirm('Are you sure you want to delete this run')) {
    api.deleteRun()
      .then(ui.deleteRunSuccess)
      .catch(ui.deleteRunFailure)
  }
}

const onUpdateRun = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.updateId = data.run.id
  console.log('button working')
  // console.log(store.updateId)
  api.updateRun(data)
    .then(ui.updateRunSuccess)
    .catch(ui.updateRunFailure)
  $('#update-run')[0].reset()
  $('#add-run')[0].reset()
}

const addHandlers = function () {
  $('#add-run').on('submit', onAddRun)
  $('#index-run').on('submit', onIndexRuns)
  $('#run-display').on('submit', '.delete-run', onDeleteRun)
  $('#update-run').on('submit', onUpdateRun)
}

module.exports = {
  addHandlers
}
