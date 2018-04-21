'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log('successful signup')
  $('#status-message').text('Successfully signed up')
  $('#status-message').css('background-color', 'green')
  setTimeout(() => $('#status-message').text(''), 3000)
}

const signUpFailure = function (data) {
  // console.log('signup failure')
  $('#status-message').text('Failure signing up')
  $('#status-message').css('background-color', 'red')
  setTimeout(() => $('#status-message').text(''), 3000)
  // console.log(data.responseText)
}

const signInSuccess = function (data) {
  // console.log('successful signin')
  $('#status-message').text('Successfully signed in')
  $('#status-message').css('background-color', 'green')
  setTimeout(() => $('#status-message').text(''), 3000)
  store.user = data.user

  // hide/display content
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#add-run').removeClass('hidden')
}

const signInFailure = function (data) {
  // console.log('signin failure')
  $('#status-message').text('Failure signing in')
  $('#status-message').css('background-color', 'red')
  setTimeout(() => $('#status-message').text(''), 3000)
  // console.log(data.responseText)
}

const changePassSuccess = function (data) {
  // console.log('successful signup')
  $('#status-message').text('Successfully changed password')
  $('#status-message').css('background-color', 'green')
  setTimeout(() => $('#status-message').text(''), 3000)
}

const changePassFailure = function (data) {
  // console.log('signup failure')
  $('#status-message').text('Failure changing password')
  $('#status-message').css('background-color', 'red')
  setTimeout(() => $('#status-message').text(''), 3000)
}

const signOutSuccess = function (data) {
  // console.log('successful signup')
  $('#status-message').text('Successfully signed out')
  $('#status-message').css('background-color', 'green')
  setTimeout(() => $('#status-message').text(''), 3000)
  store.user = null

  // hide/display content
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#add-run').addClass('hidden')
}

const signOutFailure = function (data) {
  // console.log('signup failure')
  $('#status-message').text('Failure signing out')
  $('#status-message').css('background-color', 'red')
  setTimeout(() => $('#status-message').text(''), 3000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePassSuccess,
  changePassFailure,
  signOutSuccess,
  signOutFailure
}
