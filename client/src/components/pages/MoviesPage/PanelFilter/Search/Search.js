import React, { useState } from "react";

export const Search = (props) => { 
    const { } = props

    const [filteredMovies, setFilteredMovies] = useState([]) 
    const [moviesList, setMoviesList] = useState([])
    const [inputStyleActive, setInputStyleActive] = useState(false) 
    
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
            <input type="search" title="search" className={`filter-panel__search${inputStyleActive ? " activeInput" : ""}`} placeholder={"Search"} onChange={(e) => filterMovies(e)} />            
        </>
    )
}