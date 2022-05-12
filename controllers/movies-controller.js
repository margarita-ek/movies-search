const Movies = require('../models/movies');

const getMovies = (req, res) => {
    Movies
        .find()
        .then(movies => res.status(200).send(movies)) 
        .catch((error) => {
            console.log(error);
            res.status(500)
    });
}

module.exports = {
    getMovies,
};