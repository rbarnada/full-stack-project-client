const store = require('../store')
const { add } = require('timelite/time')
// const { str } = require('timelite/time')

const addRunSuccess = function (data) {
  // console.log('successful signup')
  // $('#index-run').click()
  $('#status-message').text('Successfully added run')
  $('#status-message').css('background-color', '#E0F0D9')
  setTimeout(() => $('#status-message').text(''), 3000)
}

const addRunFailure = function (data) {
  // console.log('signup failure')
  $('#status-message').text('Improper input')
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
    <h5><strong>Date Logged:</strong> ${loop.log_date}</h5>
    <p><strong>Number of Miles:</strong> ${loop.distance}</p>
    <p><strong>Duration of run:</strong> ${loop.time}</p>
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

  // ALL STATS DATA
  const statsData = function (data) {
    // STATS PAGE INFO
    if (data.runs.length > 0) {
    // console.log(data.runs)
      console.log(data.runs)
      // TOTAL RUNS
      console.log(`Total Runs: ${data.runs.length}`)

      // TOTAL DISTANCE RAN
      // PULL DISTANCE VALUES FROM OBJECTS AND PUSH TO ARRAY
      const distanceArray = []
      const getDistance = function () {
        data.runs.forEach(function (run) {
          distanceArray.push(run.distance)
        })
      }
      getDistance()
      console.log(distanceArray)

      // GETS TOTAL DISTANCE BY ADDING ARRAY VALUES
      console.log(distanceArray.reduce(function (acc, val) {
        return acc + val
      }))

      // GETS LONGEST DISTANCE
      const longest = distanceArray.reduce(function (acc, val) {
        return Math.max(acc, val)
      })
      console.log(`Longest run is ${longest} miles`)

      // GETS SHORTEST DISTANCE
      const shortest = distanceArray.reduce(function (acc, val) {
        return Math.min(acc, val)
      })
      console.log(`Shortest run is ${shortest} miles`)

      // PULL TIME VALUES FROM OBJECTS AND PUSH TO ARRAY
      const timeArray = []
      const getTime = function () {
        data.runs.forEach(function (run) {
          timeArray.push(run.time)
        })
      }
      getTime()
      console.log(timeArray)

      // ADD ALL TIMES (WORKS BUT GIVES HH:MM:SS AS SEPARATE ARRAY VALUES)
      // STR DOES NOT ALLOW FOR 3RD HOUR SPOT. MAY NEED TO WRITE MY OWN
      const addedTime = add(timeArray)

      const prependZero = function () {
        if (addedTime[2] <= 9) {
          console.log('true')
          console.log(addedTime[2] = '0' + addedTime[2])
        }
      }
      prependZero()

      console.log(addedTime)
      const addedTimeString = addedTime.toString()
      // console.log(addedTimeString)
      console.log(addedTimeString.replace(/,/g, ':'))
      // console.log(typeof addedTimeString)
      // END TOTAL DISTANCE RAN
    }
  }
  statsData(data)
}

const indexRunsFailure = function (data) {
  $('#status-message').text('An issue occured when getting runs')
  $('#status-message').css('background-color', '#F2DEDE')
}

const deleteRunSuccess = function (data) {
  store.div_id.fadeOut(500, function () {
    this.remove()
  })

  // const anyRuns = function () {
  //   if ($('.delete-div').length === 1) {
  //     $('#run-display').append('No runs logged')
  //   }
  // }
  // setTimeout(anyRuns, 500)
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
  $('#update-error-message').text('Improper Input')
  $('#update-error-message').css('background-color', '#F2DEDE')
  setTimeout(() => $('#update-error-message').text(''), 3000)
  setTimeout(() => $('#update-error-message').css('background-color', 'white'), 3000)
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
  // statsData

}
