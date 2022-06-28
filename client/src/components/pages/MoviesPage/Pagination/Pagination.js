import React from "react";

export const Pagination = (props) => { 
    const { moviesPerPage, totalMovies, paginateClick, setCurrentPage, currentPage } = props
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) { 
        pageNumbers.push(i)
    }

    const nextPage = () => setCurrentPage( prev => prev !== pageNumbers.length ? prev + 1 : prev )
    const prevPage = () => setCurrentPage( prev => prev !==  1 ? prev - 1 : prev )    

    return (
        <div className="pagination">
            <button className="pagination__btn prev" onClick={prevPage}/>
            {
                pageNumbers.map(number => (
                    <button className={`pagination__btn${(currentPage === number) ? " active-btn": ""}`} onClick={() => paginateClick(number)} key={number}>
                        {number}
                    </button>
                ))
            }
            <button className="pagination__btn next" onClick={nextPage}/>               
        </div>
    )
}