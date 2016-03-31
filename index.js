var countries = require('./countries')

var states = {}

var normalizedPath = require('path').join(__dirname, 'states')

require('fs').readdirSync(normalizedPath).forEach(function (file) {
  require('./states/' + file)(states)
})

module.exports = {
  countries: countries,
  states: states
}
