const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    overview: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
    release_date: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    vote_average: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const Movies = mongoose.model('post', moviesSchema);

module.exports = Movies; 