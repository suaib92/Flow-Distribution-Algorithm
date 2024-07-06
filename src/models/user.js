const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add other relevant fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
