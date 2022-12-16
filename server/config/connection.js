const mongoose = require('mongoose');
require('dotenv').config()

mongoose.set('strictQuery', false);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/practice_buddy",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
