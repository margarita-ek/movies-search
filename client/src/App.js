import React, { useEffect } from 'react'
import { useApiRequest } from './api/useApiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { success } from './toolkitRedux/actions';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
    const dispatch = useDispatch()
    const moviesState = useSelector((state)=> state.movies.movies)
    const loaderState = useSelector((state)=> state.movies.loader)
    const movies = useApiRequest()

    const getDataMovies = () => { 
        return dispatch(success(movies))
    }

    useEffect(() => { 
        const testTest = getDataMovies()
        console.log('state', testTest);
    }, [])

    return (
        <div className='wrapper'>
            <Header />
            <Footer />
        </div>    
    )
}

export default App;
