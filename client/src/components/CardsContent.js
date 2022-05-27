import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { ModalCard } from "./ModalCard";

export const CardsContent = (props) => {
    const { dataForCards, showModalCard, setShowModalCard } = props
    const [elementID, setElementID] = useState("")
    
    { showModalCard ? document.body.classList.add('modal-full') : document.body.classList.remove('modal-full') }

    useEffect(() => { 
        if (elementID.length !== 0) { 
            console.log('elemID', elementID);
        }
    }, [elementID])

    return (
        <>
        <div className="main__cards-content card">
            {(dataForCards.length > 0) ? dataForCards.map(card => {        
                return <Card card={card} key={card._id} setShowModalCard={setShowModalCard} setElementID={setElementID}/>
            }) : null}            
        </div>     
            {<ModalCard elementID={elementID} showModalCard={showModalCard} setShowModalCard={setShowModalCard} setElementID={setElementID} dataForModalCard={dataForCards} /> }        
        </>
    )
}