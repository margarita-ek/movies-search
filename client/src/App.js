import React, { useEffect } from 'react'
import { useApiRequest } from './api/useApiRequest';
import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
    // const moviesState = useSelector((state) => state.movies.movies)
    // const movies = useApiRequest()

    // useEffect(() => { 
    //     console.log('stateMoviesFromApp', moviesState);
    // }, [moviesState])

    return (
        <div className='wrapper'>
            <Header />
            <Footer />
        </div>    
    )
}

export default App;
