'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  // console.log('sign up working')
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
  // console.log('sign in working')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)

  // Refactor into function in UI
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
}

const onChangePass = function (event) {
  // console.log('change pass button pressed')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePass(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFailure)
  $('#change-password')[0].reset()
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out pressed')
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('#change-password')[0].reset()
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePass)
  $('#sign-out').on('submit', onSignOut)
}

$('.modal').on('hidden.bs.modal', function (e) {
  $('input[type="email"], input[type="password"], input[type="text"], input[type="date"], input[type="number"], textarea').val('')
})

module.exports = {
  addHandlers
}
