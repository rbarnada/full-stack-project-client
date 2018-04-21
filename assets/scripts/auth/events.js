'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  console.log('sign up working')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)

  // Refactor into function in UI
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
}

const onSignIn = function (event) {
  console.log('sign in working')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)

  // Refactor into function in UI
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
