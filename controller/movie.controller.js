const Movies = require('../models/movies');
const InvalidParamException = require('../exceptions/invalid.param.exception');
const InvalidRequestException = require('../exceptions/invalid-request');

// Add movies
const create = (request, response, next) => {
    return new Promise(async (resolve, reject) => {
        try {
            const moviesData = {
                movie_id: request.body.movieId,
                tmdb_id: request.body.tmdbId,
                imdb_id: request.body.imdbId,
                title: request.body.title,
                adult: request.body.adult,
                genres: request.body.genres,
                production_companies: request.body.productionCompanies,
                production_countries: request.body.productionCountries,
                release_date: request.body.releaseDate,
                rating: request.body.rating
            }

            const movieData = await Movies.findOne({ movie_id: request.body.movieId })
            if (movieData) {
                throw new InvalidRequestException('movie already exists')
            }
            const movieDataPayload = await Movies.create(moviesData)
            resolve(
                response.json({
                    success: true,
                    message: 'movie added successfully',
                    result: movieDataPayload
                })
            )
        } catch (error) {
            next(error)
        }
    })
}

// Fetching all movies
const fetchAll = (request, response, next) => {
    return new Promise(async (resolve, reject) => {
        try {
            const movieData = await Movies.find({})
            resolve(
                response.json({
                    success: true,
                    message: 'movies fetched successfully',
                    result: movieData
                })
            )
        } catch (error) {
            next(error)
        }
    })
}

// Fetching movie on the basis of movieId
const fetchOne = (request, response, next) => {
    return new Promise(async (resolve, reject) => {
        try {
            const movieId = parseInt(request.params.movieId)
            const movieData = await Movies.findOne({ movie_id: movieId })
            if (!movieData) {
                throw new InvalidParamException('movie not found.')
            }
            resolve(
                response.json({
                    success: true,
                    message: 'movies fetched successfully',
                    result: movieData
                })
            )
        } catch (error) {
            next(error)
        }
    })
}
// Updating movie on the basis of movieId
const update = (request, response, next) => {
    return new Promise(async (resolve, reject) => {
        try {
            const movieId = parseInt(request.params.movieId)
            const movieData = await Movies.findOne({ movie_id: movieId })
            if (!movieData) {
                throw new InvalidParamException('movie not found.')
            }
            const movieDataPayload = await Movies.updateOne({ movie_id: movieId },
                {
                    $set: {
                        tmdb_id: request.body.tmdbId,
                        imdb_id: request.body.imdbId,
                        title: request.body.title,
                        adult: request.body.adult,
                        genres: request.body.genres,
                        production_companies: request.body.productionCompanies,
                        production_countries: request.body.productionCountries,
                        release_date: request.body.releaseDate,
                        rating: request.body.rating
                    },
                });
            resolve(
                response.json({
                    success: true,
                    message: 'movie updated successfully',
                    result: {}
                })
            )
        } catch (error) {
            next(error)
        }
    })
}
// Deleting movie on the basis of movieId
const deleteMovieData = (request, response, next) => {
    return new Promise(async (resolve, reject) => {
        try {
            const movieId = parseInt(request.params.movieId)
            const movieData = await Movies.findOne({ movie_id: movieId })
            if (!movieData) {
                throw new InvalidParamException('movie not found.')
            }
            const movieDataPayload = await Movies.updateOne({ movie_id: movieId },
                {
                    $set: {
                        is_active: 0,
                        is_deleted: 1

                    },
                });
            resolve(
                response.json({
                    success: true,
                    message: 'movie deleted successfully',
                    result: {}
                })
            )
        } catch (error) {
            next(error)
        }
    })
}
module.exports = { create, fetchAll, fetchOne, update, deleteMovieData }