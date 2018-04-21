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

module.exports = {
  addRun
}
