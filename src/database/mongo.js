const mongoose = require('mongoose');

module.exports = function () {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  mongoose.connection.on('error', console.error.bind(console, 'Error on connect to mongoDB.'));

  mongoose.connection.once('open', function () {
    console.log("Connect to MongoDB!")
  })
}