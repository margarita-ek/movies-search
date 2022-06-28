import React, { useEffect, useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { Card } from "./Card";

export const CardsContent = (props) => {
    const { dataForCards, setShowModalCard, setElementID, valueOption } = props
    const [currentPage, setCurrentPage] = useState(1)
    const [moviesPerPage] = useState(8)

    let arrOfGenreValues = []

    const lastMovieIndex = currentPage * moviesPerPage
    const firstMovieIndex = lastMovieIndex - moviesPerPage
    const currentMovie = dataForCards.slice(firstMovieIndex, lastMovieIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage( prev => prev + 1)
    const prevPage = () => setCurrentPage( prev => prev - 1)

    dataForCards.forEach((obj) => {
        for (const key in obj) {
            if (obj[key] === valueOption) {
                arrOfGenreValues.push(obj)
                return arrOfGenreValues
            }
        }
    })

    useEffect(() => {
        console.log('data', dataForCards);
    }, [dataForCards])

    return (
        <>
            <div className="main__cards-content card">
                {(dataForCards.length > 0 && valueOption === "all genres") ? currentMovie.map(card => {        
                    return <Card card={card} key={card._id} setShowModalCard={setShowModalCard} setElementID={setElementID}/>
                }) : arrOfGenreValues.map(card => { return <Card card={card} key={card._id} setShowModalCard={setShowModalCard} setElementID={setElementID}/>})}            
            </div>
            <div className="main__cards-pagination">
                <Pagination
                    moviesPerPage={moviesPerPage}
                    totalMovies={(valueOption === "all genres") ? dataForCards.length : arrOfGenreValues.length}
                    paginate={paginate}
                />
                <button className="btn btn-primary" onClick={prevPage}>Prev Page</button>
                <button className="btn btn-primary ms-2" onClick={nextPage}>Next Page</button>
            </div>
        </>
    )
}