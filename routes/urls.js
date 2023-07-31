const express = require('express')
const router = express.Router()
const { create, fetchAll, fetchOne, update, deleteMovieData } = require('../controller/movie.controller')

router.post('/v1/movies', create);
router.get('/v1/movies', fetchAll)
router.get('/v1/:movieId', fetchOne)
router.put('/v1/:movieId', update)
router.delete('/v1/:movieId', deleteMovieData)
module.exports = router