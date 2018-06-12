const store = require('../store')
const { add } = require('timelite/time')

const addRunSuccess = function (data) {
  // console.log('successful signup')
  // GO TO ALL RUNS AFTER SUBMITTING NEW RUN?
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
  // re-sorts runs so most recent is display first
  const sorted = data.runs.sort(function (a, b) {
    return b.id - a.id
  })

  if (sorted.length === 0) {
    $('#run-display').append(`No runs logged yet`)
  } else {
    sorted.forEach(function (loop) {
      // adds run data onto the all runs page
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

    // passes data id to the id field for updating run
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
    if (data.runs.length < 1) {
      $('#stat-display').append('No runs logged yet')
    }

    if (data.runs.length > 0) {
      // console.log(data.runs)

      // TOTAL RUNS
      $('#stat-display').append(`
      <p>Total Runs: ${data.runs.length}</p>
      `)

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
      const totalDistance = distanceArray.reduce(function (acc, val) {
        return acc + val
      })
      console.log(totalDistance)
      $('#stat-display').append(`
        <p>Total Miles Ran: ${totalDistance}</p>
        `)

      // GETS LONGEST DISTANCE
      const longest = distanceArray.reduce(function (acc, val) {
        return Math.max(acc, val)
      })
      console.log(`Longest run is ${longest} miles`)
      $('#stat-display').append(`
        <p>Longest Run: ${longest} miles</p>
        `)

      // GETS SHORTEST DISTANCE
      const shortest = distanceArray.reduce(function (acc, val) {
        return Math.min(acc, val)
      })
      console.log(`Shortest run is ${shortest} miles`)
      $('#stat-display').append(`<p>Shortest Run: ${shortest} mile(s)</p>`)

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
      const addedTime = add(timeArray)

      // PREPENDS ZEROES IN SECONDS SPOT IF NUMBER IS BETWEEN 0-9
      // I.E. 1 -> 01
      const prependZero = function () {
        for (let i = 0; i < addedTime.length; i++) {
          if (addedTime[i] <= 9) {
            console.log('true')
            addedTime[i] = '0' + addedTime[i]
            // addedTime[i] = '0' + addedTime[i]
          }
        }
      }

      prependZero()
      console.log(addedTime)

      // TURNS ARRAY TO STRING AND REPLACES COMMAS WITH COLONS
      const addedTimeString = addedTime.toString()
      // console.log(addedTimeString)
      const normalizedTime = addedTimeString.replace(/,/g, ':')
      // console.log(normalizedTime)
      $('#stat-display').append(`<p>Total Time Running: ${normalizedTime}</p>`)
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

// FUNCTION TO ADD TEXT IF LAST RUN IS DELETE (WAS BUGGY, NEEDS TO BE REEVALUTATED)
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
  $('#view-runs-tab').click()
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
}
