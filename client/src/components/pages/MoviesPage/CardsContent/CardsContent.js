import React, { useEffect, useRef, useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { Card } from "./Card";

export const CardsContent = (props) => {
    const { dataForCards, setShowModalCard, setElementID, valueOption } = props
    const [currentPage, setCurrentPage] = useState(1)
    const [moviesPerPage] = useState(8)

    const cardContentRef = useRef()

    let arrOfGenreValues = []

    const lastMovieIndex = currentPage * moviesPerPage
    const firstMovieIndex = lastMovieIndex - moviesPerPage
    const currentMovie = dataForCards.slice(firstMovieIndex, lastMovieIndex)

    dataForCards.forEach((obj) => {
        for (const key in obj) {
            if (obj[key] === valueOption) {
                arrOfGenreValues.push(obj)
                return arrOfGenreValues
            }
        }
    })

    const paginateClick = (number) => { 
        setCurrentPage(number)
        return
    }

    return (
        <>
            <div className="main__cards-content card" ref={cardContentRef}>
                {(dataForCards.length > 0 && valueOption === "all genres") ? currentMovie.map(card => {        
                    return <Card card={card} key={card._id} setShowModalCard={setShowModalCard} setElementID={setElementID}/>
                }) : arrOfGenreValues.map(card => { return <Card card={card} key={card._id} setShowModalCard={setShowModalCard} setElementID={setElementID}/>})}            
            </div>
            <div className="main__cards-pagination">
                <Pagination
                    moviesPerPage={moviesPerPage}
                    totalMovies={(valueOption === "all genres") ? dataForCards.length : arrOfGenreValues.length}
                    paginateClick={paginateClick}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </>
    )
}