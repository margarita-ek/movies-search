import React, { useState } from "react";

export const Search = (props) => { 
    const { dataForCards, setSearchToggle, setFilteredMovieCard } = props

    const [inputStyleActive, setInputStyleActive] = useState(false)
    
    const filterMovies = (event) => { 
        if (event.target.value.length > 0) {
            setSearchToggle(true)
            const titleOfObject = dataForCards.filter((el) => el.title.toLowerCase().includes(event.target.value.toLowerCase()))
            setFilteredMovieCard(titleOfObject)
            setInputStyleActive(true)
        }
        else if (event.target.value.length === 0){
            setSearchToggle(false)
            setFilteredMovieCard([])
            setInputStyleActive(false)            
        }
    }

    return (
        <>
            <input type="search" title="search" className={`filter-panel__search${inputStyleActive ? " activeInput" : ""}`} placeholder={"Search"} onChange={(e) => filterMovies(e)} />            
        </>
    )
}