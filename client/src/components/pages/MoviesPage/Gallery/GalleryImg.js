import React, { createRef, useEffect } from "react";

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
            {/* <div className="main__gallery-image"> */}
                <img className="main__gallery-image" onClick={handleClick} src={`../img/gallery${obj.gallery}`} id={obj._id} ref={myRef}/>
            {/* </div> */}
            {/* <div className="main__gallery-content">
                <div className="main__gallery-container">
                    <span className="main__gallery-title">{obj.title}</span>
                    <button ref={myRef} id={obj._id} onClick={handleClick} className="main__gallery-button">View Info</button>           
                </div>    
            </div>      */}
        </>
    )
}