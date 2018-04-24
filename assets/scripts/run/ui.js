const store = require('../store')

const addRunSuccess = function (data) {
  // console.log('successful signup')
  $('#status-message').text('Successfully added run')
  $('#status-message').css('background-color', 'green')
  setTimeout(() => $('#status-message').text(''), 3000)
}

const addRunFailure = function (data) {
  // console.log('signup failure')
  $('#status-message').text('Improper Format.')
  $('#status-message').css('background-color', 'red')
  setTimeout(() => $('#status-message').text(''), 3000)
}

const indexRunsSuccess = function (data) {
  const sorted = data.runs.sort(function (a, b) {
    return b.id - a.id
  })

  if (sorted.length === 0) {
    $('#run-display').append(`No runs logged yet`)
  } else {
    sorted.forEach(function (loop) {
      $('#run-display').append(`
    <div id='delete-run${loop.id}' class='delete-div'>
    <h4>Run: ${loop.id}</h4>
    <p>${loop.distance} miles</p>
    <p>Duration of run: ${loop.time}</p>
    <form data-id="${loop.id}" class='form-field delete-run'>
      <fieldset>
        <input type="submit" value="Delete Run!">
      </fieldset>
    </form>
    </div>
  `)
    })
  }
}
// console.log(data.runs)

const indexRunsFailure = function (data) {
  $('#status-message').text('An issue occured when getting games')
}

const deleteRunSuccess = function () {
  store.fade.fadeOut()
}

const updateRunSuccess = function (data) {
  $('#status-message').text('Successfully updated run')
  $('#status-message').css('background-color', 'green')
  setTimeout(() => $('#status-message').text(''), 3000)
}

const updateRunFailure = function (data) {
  $('#status-message').text('Failure updating run')
  $('#status-message').css('background-color', 'red')
  setTimeout(() => $('#status-message').text(''), 3000)
}

module.exports = {
  addRunSuccess,
  addRunFailure,
  indexRunsSuccess,
  indexRunsFailure,
  updateRunSuccess,
  updateRunFailure,
  deleteRunSuccess

}
