import React from "react";

export const MoviesPage = () => { 
    return (
        <main className="main">
            <div className="main__gallery">
                <img className="main__image" src="../img/testbag.png" alt="gallery"/>
            </div>
                <div className="main__content">
                    <div className="main__filter-panel">
                        <select title="filter genre" className="list-menu">
                            <option selected>All Genres</option>
                            <option>Test</option>
                            <option>Test</option>
                            <option>Test</option>
                        </select>
                        <div className="cards-menu">Test Item</div>
                    </div>
                    <div className="main__cards-content card">
                        <div title="movie card" className="card__container">
                            <div className="card__image"><img alt="image" src="../img/movies/365days.jpg"/></div>
                            <div className="card__description">
                                <div className="card__title">365 days</div>
                                <div className="card__vote-average">
                                    <div>
                                        <span>7.6</span>
                                    </div>
                                </div>
                                <div className="card__genre">thriller</div>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
    )
}