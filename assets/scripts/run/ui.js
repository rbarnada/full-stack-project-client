const addRunSuccess = function (data) {
  // console.log('successful signup')
  $('#status-message').text('Successfully added run')
  $('#status-message').css('background-color', 'green')
  setTimeout(() => $('#status-message').text(''), 3000)
}

const addRunFailure = function (data) {
  // console.log('signup failure')
  $('#status-message').text('Failure adding run')
  $('#status-message').css('background-color', 'red')
  setTimeout(() => $('#status-message').text(''), 3000)
}

module.exports = {
  addRunSuccess,
  addRunFailure
}
