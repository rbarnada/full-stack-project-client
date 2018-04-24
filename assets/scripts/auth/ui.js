'use strict'
const store = require('../store')

const dob = document.getElementsByClassName('dob')
for (let i = 0; i < dob.length; i++) {
  dob[i].addEventListener('keyup', function (e) {
    const reg = /[0-9]/
    // this.value = this.value.substr(0, this.value.length - 1)
    // Add colon if string length > 2 and string is a number
    if (this.value.length === 4 && reg.test(this.value)) this.value = this.value + '-'
    // Add colon if string length > 4 and string is a number
    if (this.value.length === 7 && reg.test(this.value)) this.value = this.value + '-'
    // Delete the last digit if string length > 8
    if (this.value.length > 10) this.value = this.value.substr(0, this.value.length - 1)
  })
}

const signUpSuccess = function (data) {
  // console.log('successful signup')
  $('#status-message').text('Successfully signed up')
  $('#status-message').css('background-color', 'green')
  setTimeout(() => $('#status-message').text(''), 3000)
  console.log(data)
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

  // Insert colon in time input
  const time = document.getElementsByClassName('time')
  for (let i = 0; i < time.length; i++) {
    time[i].addEventListener('keyup', function (e) {
      const reg = /[0-9]/
      // this.value = this.value.substr(0, this.value.length - 1)
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
  $('#index-run').addClass('hidden')
  $('#update-run').addClass('hidden')
  $('.delete-div').addClass('hidden')
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
