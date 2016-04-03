var countries = require('./countries')

var states = {}

// static requires, to ensure this npm module will be compatible with browserify
require('./states/AR')(states)
require('./states/AU')(states)
require('./states/BD')(states)
require('./states/BG')(states)
require('./states/BR')(states)
require('./states/CA')(states)
require('./states/CN')(states)
require('./states/ES')(states)
require('./states/GR')(states)
require('./states/HK')(states)
require('./states/HU')(states)
require('./states/ID')(states)
require('./states/IN')(states)
require('./states/IR')(states)
require('./states/IT')(states)
require('./states/JP')(states)
require('./states/MX')(states)
require('./states/MY')(states)
require('./states/NP')(states)
require('./states/NZ')(states)
require('./states/PE')(states)
require('./states/PH')(states)
require('./states/TH')(states)
require('./states/TR')(states)
require('./states/US')(states)
require('./states/ZA')(states)

module.exports = {
  countries: countries,
  states: states
}
