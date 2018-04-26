const store = require('../store')

const addRunSuccess = function (data) {
  // console.log('successful signup')
  // $('#index-run').click()
  $('#status-message').text('Successfully added run')
  $('#status-message').css('background-color', '#E0F0D9')
  setTimeout(() => $('#status-message').text(''), 3000)
}

const addRunFailure = function (data) {
  // console.log('signup failure')
  $('#status-message').text('Improper input. Make sure to fill all field and use HH:MM:SS')
  $('#status-message').css('background-color', '#F2DEDE')
  setTimeout(() => $('#status-message').text(''), 5000)
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
    <div id='run${loop.id}' class='delete-div'>
    <h4>Run ID: ${loop.id}</h4>
    <p>Date Logged: ${loop.log_date}</p>
    <p>Number of Miles: ${loop.distance}</p>
    <p>Duration of run: ${loop.time}</p>
    <div class='row'>
      <div class='col-xs-6'>
        <form data-id="${loop.id}" class='form-field delete-run'>
          <fieldset>
            <input type="submit" class="btn btn-default btn-sm" value="Delete">
          </fieldset>
        </form>
      </div>
      <div class='col-xs-6'>
        <button type="button" data-id="${loop.id}" class="btn btn-default btn-sm update-button" data-toggle="modal" data-target="#update-run-modal">Update</button>
        </div>
    </div>
  `)
    })
    $('.update-button').on('click', function (event) {
      // console.log(event.target)
      const runUpdate = $(event.target).attr('data-id')
      $('#run-update-id').val(runUpdate)
      // console.log(runUpdate)
    })
  }
}
// console.log(data.runs)

const indexRunsFailure = function (data) {
  $('#status-message').text('An issue occured when getting runs')
  $('#status-message').css('background-color', '#F2DEDE')
}

const deleteRunSuccess = function (data) {
  store.div_id.fadeOut(500, function () {
    this.remove()
  })

  const anyRuns = function () {
    if ($('.delete-div').length === 1) {
      $('#run-display').append('No runs logged')
    }
  }
  setTimeout(anyRuns, 500)
}
const deleteRunFailure = function (data) {
  $('#status-message').text('An issue occurred when deleting runs')
  $('#status-message').css('background-color', '#F2DEDE')
}

const updateRunSuccess = function (data) {
  $('#status-message').text('Successfully updated run')
  $('#status-message').css('background-color', '#E0F0D9')
  setTimeout(() => $('#status-message').text(''), 3000)
  $('.modal').modal('hide')
  // const updateGreen = '#run' + data.run.id
  // console.log(updateGreen)
  // console.log(store.updateId)
  $('#view-runs-tab').click()
  // setTimeout(() => $('#run' + data.run.id).css('background-color', 'cyan'), 0)
}

const updateRunFailure = function (data) {
  $('#status-message').text('Failure updating run')
  $('#status-message').css('background-color', '#F2DEDE')
  setTimeout(() => $('#status-message').text(''), 3000)
}

module.exports = {
  addRunSuccess,
  addRunFailure,
  indexRunsSuccess,
  indexRunsFailure,
  updateRunSuccess,
  updateRunFailure,
  deleteRunSuccess,
  deleteRunFailure

}
