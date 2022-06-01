import React, { createRef } from "react";

export const Card = ({ card, setShowModalCard, setElementID }) => {
    let myRef = createRef()

    const handleClick = () => {
        let elementClickID = myRef.current.id
        setElementID(elementClickID)
        setShowModalCard(true)
    }

    return (
        <div className="card__container">
            <div className="card__image" ref={myRef} id={card._id} onClick={handleClick} title="poster"><img alt={card.title} src={`../img/movies${card.poster}`}/></div>
            <div className="card__description">
                <div className="card__title" title={card.title}>{card.title}</div>
                <div className="card__vote-average">
                    <div>
                        <span title="vote average">{card.vote_average}</span>
                    </div>
                </div>
                <div className="card__genre" title="genre">{card.genre}</div>
            </div>
        </div>            
    )
}