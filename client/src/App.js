import React, { useCallback, useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { MoviesPage } from './components/MoviesPage';
import { ContactsPage } from './components/ContactsPage';
import { useApiRequest } from './api/useApiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { success } from './toolkitRedux/actions';

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
        <>
            <header>
                <Link to="/">Главная страница</Link>
                <Link to="/contacts">Страница контактов</Link>
            </header>
            <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
        </>    
    )
}

export default App;
