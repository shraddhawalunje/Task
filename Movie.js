const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    showtimes: [{ type: Date, required: true }],
});

module.exports = mongoose.model('Movie', movieSchema);
