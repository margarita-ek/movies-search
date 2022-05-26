import React from "react";

export const Card = () => { 
    return (
        <div className="card__container" title="movie card">
            <div className="card__image"><img alt="image" src="../img/movies/365days.jpg"/></div>
            <div className="card__description">
                <div className="card__title" title="title">365 days</div>
                <div className="card__vote-average">
                    <div>
                        <span title="vote average">7.6</span>
                    </div>
                </div>
                <div className="card__genre" title="genre">thriller</div>
            </div>
        </div>            
    )
}