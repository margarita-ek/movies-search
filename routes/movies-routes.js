const express = require('express');
const { getMovies } = require('../controllers/movies-controller')

const router = express.Router()

router.get('/api/movies', getMovies);

module.exports = router;