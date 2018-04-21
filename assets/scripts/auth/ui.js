'use strict'

const signUpSuccess = function (data) {
  $('#status-message').text('Successfully signed up')
  $('#status-message').css('background-color', 'green')
  console.log('successful signup')
}

const signUpFailure = function (data) {
  console.log('signup failure')
  $('#status-message').text('Failure signing up')
  $('#status-message').css('background-color', 'red')
  // console.log(data.responseText)
}

const signInSuccess = function (data) {
  $('#status-message').text('Successfully signed in')
  $('#status-message').css('background-color', 'green')
  console.log('successful signin')
}

const signInFailure = function (data) {
  console.log('signin failure')
  $('#status-message').text('Failure signing in')
  $('#status-message').css('background-color', 'red')
  // console.log(data.responseText)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess
}
