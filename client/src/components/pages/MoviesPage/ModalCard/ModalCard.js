import React from "react";

export const ModalCard = (props) => { 
    const { elementID, showModalCard, setShowModalCard, dataForModalCard } = props;

    let arrContent;
    let cardContent;
    if (elementID.length !== 0 && dataForModalCard !== undefined) {
        arrContent = dataForModalCard.filter((each) => each._id === elementID)
        cardContent = arrContent[0]
    }

    return(
        <>
            { showModalCard && (<div className="modalCard__wrapper">
                <div className="modalCard__window">
                    <div className="modalCard__button">
                        <span onClick={() => setShowModalCard(false)}></span>
                    </div>                         
                    <div className="modalCard__container">
                        <div className="modalCard__image" title="poster"><img alt={cardContent.title} src={`../img/movies${cardContent.poster}`} /></div>               
                        <div className="modalCard__content">
                            <div className="modalCard__title"><span>{cardContent.title}</span></div>
                            <div className="modalCard__description">{cardContent.overview}</div>
                            <ul className="modalCard__items">
                                <li className="modalCard__average">Vote average: <span>{cardContent.vote_average}</span></li>                                
                                <li className="modalCard__genre">Genre: <span>{cardContent.genre}</span></li>                                
                                <li className="modalCard__date">Release date: <span>{cardContent.release_date}</span></li>
                            </ul>                        
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}