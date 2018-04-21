'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log('successful signup')
  $('#status-message').text('Successfully signed up')
  $('#status-message').css('background-color', 'green')
}

const signUpFailure = function (data) {
  // console.log('signup failure')
  $('#status-message').text('Failure signing up')
  $('#status-message').css('background-color', 'red')
  // console.log(data.responseText)
}

const signInSuccess = function (data) {
  // console.log('successful signin')
  $('#status-message').text('Successfully signed in')
  $('#status-message').css('background-color', 'green')
  store.user = data.user
}

const signInFailure = function (data) {
  // console.log('signin failure')
  $('#status-message').text('Failure signing in')
  $('#status-message').css('background-color', 'red')
  // console.log(data.responseText)
}

const changePassSuccess = function (data) {
  // console.log('successful signup')
  $('#status-message').text('Successfully changed password')
  $('#status-message').css('background-color', 'green')
}

const changePassFailure = function (data) {
  // console.log('signup failure')
  $('#status-message').text('Failure changing password')
  $('#status-message').css('background-color', 'red')
  // console.log(data.responseText)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePassSuccess,
  changePassFailure
}
