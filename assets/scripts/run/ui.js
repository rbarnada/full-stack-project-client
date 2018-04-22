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

const indexRunsSuccess = function (data) {
  data.runs.forEach(function (loop) {
    $('#run-display').append(`
    <h4>Run: ${loop.id}</h4>
    <p>${loop.distance} miles</p>
    <p>Duration of run: ${loop.time}</p>
    <form data-id="${loop.id}" class='form-field delete-run'>
      <fieldset>
        <input type="submit" value="Delete Run!">
      </fieldset>
    </form>
  `)
  })
  console.log(data.runs)
}

const indexRunsFailure = function (data) {
  $('#status-message').text('An issue occured when getting games')
}

module.exports = {
  addRunSuccess,
  addRunFailure,
  indexRunsSuccess,
  indexRunsFailure
}
