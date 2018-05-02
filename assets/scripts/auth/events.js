'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Date validation. Checks current date and sets it to the max
// value of the date input in the date of birth field
let today = new Date()
let dd = today.getDate()
let mm = today.getMonth() + 1 // January is 0!
const yyyy = today.getFullYear()

if (dd < 10) {
  dd = '0' + dd
}

if (mm < 10) {
  mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd
$('#dob').attr('max', today)

const onSignUp = function (event) {
  // console.log('sign up working')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(() => autoSignIn(data))
    .catch(ui.signUpFailure)

  // Refactor into function in UI
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
}

const autoSignIn = function (data) {
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
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
