'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log('successful signup')
  $('#status-message').text('Successfully signed up')
  $('#status-message').css('background-color', 'green')
  setTimeout(() => $('#status-message').text(''), 3000)
  console.log(data)
  $('#sign-up-modal').modal('hide')
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
  $('#index-run').removeClass('hidden')
  $('#update-run').removeClass('hidden')
  $('#delete-run').removeClass('hidden')
  $('#update-run')[0].reset()
  $('#add-run')[0].reset()
  $('#start-modal-button').addClass('hidden')
  $('#start').modal('hide')
  $('#change-password-modal-button').removeClass('hidden')
  $('#add-run-modal-button').removeClass('hidden')
  $('#tab-nav').removeClass('hidden')

  // Form validation for time fields
  const time = document.getElementsByClassName('time')
  for (let i = 0; i < time.length; i++) {
    time[i].addEventListener('keyup', function (e) {
      const reg = /[0-9]/

      // checks for letter/special characters/spaces/etc and deletes if inputted
      const value = $(this).val().replace(/[^0-9:]/, '')
      $(this).val(value)

      // Stops first hour and minute digit from being above 5
      if ((this.value.length === 4 || this.value.length === 7) && this.value.substr(this.value.length - 1) > 5) this.value = this.value.substr(0, this.value.length - 1)
      // Add colon if string length > 2 and string is a number
      if (this.value.length === 2 && reg.test(this.value)) this.value = this.value + ':'
      // Add colon if string length > 4 and string is a number
      if (this.value.length === 5 && reg.test(this.value)) this.value = this.value + ':'
      // Delete the last digit if string length > 8
      if (this.value.length > 8) this.value = this.value.substr(0, this.value.length - 1)
    })
  }
}

const signInFailure = function (data) {
  $('#in-fail-message').text('Incorrect Login. Try Again')
  $('#in-fail-message').css('background-color', 'pink')
  setTimeout(() => $('#in-fail-message').text(''), 3000)
}

const changePassSuccess = function (data) {
  // console.log('successful signup')
  $('#status-message').text('Successfully changed password')
  $('#status-message').css('background-color', 'green')
  setTimeout(() => $('#status-message').text(''), 3000)
  $('.modal').modal('hide')
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
  $('#index-run').addClass('hidden')
  $('#update-run').addClass('hidden')
  $('.delete-div').addClass('hidden')
  // $('#signup-modal-button').removeClass('hidden')
  // $('#signin-modal-button').removeClass('hidden')
  $('#start-modal-button').removeClass('hidden')
  $('#change-password-modal-button').addClass('hidden')
  $('#add-run-modal-button').addClass('hidden')
  $('#view-runs-tab').removeClass('active')
  $('#view-runs').removeClass('active')
  $('#log-tab').addClass('active')
  $('#log-run').addClass('active')
  $('#tab-nav').addClass('hidden')
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
