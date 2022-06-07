import React, { createRef } from "react";

export const GalleryImg = (props) => { 
    const { setElementID, setShowModalCard, obj } = props;
    const myRef = createRef()

    const handleClick = () => { 
        const elementClickID = myRef.current.id
        setElementID(elementClickID)
        setShowModalCard(true)
    }    

    return (
        <>
            <img src={`../img/gallery${obj.gallery}`} />
            <div className="main__gallery-content">
                <span className="main__gallery-title">{obj.title}</span>
                <button ref={myRef} id={obj._id} onClick={handleClick} className="main__gallery-button">View Info</button>           
            </div>         
        </>
    )
}