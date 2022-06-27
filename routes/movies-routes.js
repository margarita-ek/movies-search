const express = require('express');
const { getMovies } = require('../controllers/movies-controller')

const router = express.Router()

router.get('/movies', getMovies);

module.exports = router;