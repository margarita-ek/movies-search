import React, { useEffect } from "react";
import { Card } from "./Card";

export const CardsContent = (props) => {
    const { dataForCards, setShowModalCard, setElementID, valueOption } = props

    let arrOfGenreValues = []

    dataForCards.forEach((obj) => {
        for (const key in obj) {
            if (obj[key] === valueOption) {
                arrOfGenreValues.push(obj)
                return arrOfGenreValues
            }
        }
    })

    return (
        <>
        <div className="main__cards-content card">
            {(dataForCards.length > 0 && valueOption === "all genres") ? dataForCards.map(card => {        
                return <Card card={card} key={card._id} setShowModalCard={setShowModalCard} setElementID={setElementID}/>
            }) : arrOfGenreValues.map(card => { return <Card card={card} key={card._id} setShowModalCard={setShowModalCard} setElementID={setElementID}/>})}            
        </div>     
        </>
    )
}