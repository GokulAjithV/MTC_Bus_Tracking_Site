const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
},{ //Here driver is my collection in db
    collection : 'driver'
});

const User = mongoose.model('User', userSchema);

module.exports = User;
