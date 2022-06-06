var configValues = require('./config')

module.exports = {
  getDBConnectionString: function() {
    return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd + '@cluster0.gi7kf.mongodb.net/?retryWrites=true&w=majority'
  }
}
