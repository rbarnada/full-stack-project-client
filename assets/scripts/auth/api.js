'use strict'
const config = require('../config')

const signUp = function (data) {
  // console.log('api connected')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

module.exports = {
  signUp
}
