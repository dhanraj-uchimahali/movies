const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    movie_id: {
        type: Number,
        required: true
    },
    tmdb_id: {
        type: Number,
        required: true
    },
    imdb_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    adult: {
        type: Boolean,
        default: 0
    },
    genres: {
        type: Array
    },
    production_companies: {
        type: Array
    },
    production_countries: {
        type: Array
    },
    release_date: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    is_active:{
        type: Boolean,
        default: 1
    },
    is_deleted:{
        type: Boolean,
        default: 0
    }
}, {
    versionKey: false
}, { timestamps: true });

let Movies = mongoose.model("movies", Schema)
module.exports = Movies;
