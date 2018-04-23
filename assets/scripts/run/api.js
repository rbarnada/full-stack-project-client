'use strict'
const config = require('../config')
const store = require('../store')

const addRun = function (data) {
  // console.log('api connected')
  return $.ajax({
    url: config.apiUrl + `/runs`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexRuns = function () {
  console.log('api connected')
  return $.ajax({
    url: config.apiUrl + `/runs`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRun = function () {
  // console.log('api connected')
  return $.ajax({
    url: config.apiUrl + `/runs/` + store.runId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRun = function (data) {
  // console.log('api connected')
  return $.ajax({
    url: config.apiUrl + `/runs/` + store.updateId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  addRun,
  indexRuns,
  deleteRun,
  updateRun
}
