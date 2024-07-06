const mongoose = require('mongoose');

const astrologerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add other relevant fields like connection count, preferences, etc.
});

const Astrologer = mongoose.model('Astrologer', astrologerSchema);

module.exports = Astrologer;
