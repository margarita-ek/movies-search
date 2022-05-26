import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from 'react-router-dom'
import { MoviesPage } from './pages/MoviesPage';
import { ContactsPage } from './pages/ContactsPage';

export const Header = () => { 
    /*const stateMovies = ... тут мы получили со стейта массив фильмов*/
    const [moviesList, setMoviesList] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [inputStyleActive, setInputStyleActive] = useState(false)

    /*useEffect(() => { 
        setMoviesList(stateMovies)
    }, []) - тут помещаем фильмы в лист*/

    const filterMovies = (event) => { 
        if (event.target.value.length > 0) {
            const filtMovie = moviesList.filter((el) => el.title.toLowerCase().includes(event.target.value.toLowerCase()));
            setFilteredMovies(filtMovie);
            setInputStyleActive(true)
        }
        else if (event.target.value.length >= 0){
            setInputStyleActive(false)      
        }
    }

    return (
        <>
            <header className="header">
                <span className="header__logo" title="home"><Link to="/"/></span>
                <input type="search" title="search" className={`header__search${inputStyleActive ? " activeInput" : ""}`} placeholder={"Search"} onChange={(e) => filterMovies(e)} />
                <Link className="header__link-contacts" to="/contacts" title="contacts">Contacts</Link>
            </header>
            <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
        </>
    )
}