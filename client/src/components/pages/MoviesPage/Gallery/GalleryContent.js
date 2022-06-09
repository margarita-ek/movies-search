import React, { useEffect } from "react"; 

export const GalleryContent = (props) => { 
    const { setElementID, setShowModalCard, obj } = props;

    // let slideVisible = document.querySelector('.slide-visible')
    // let imgOfSlideVisible = slideVisible.querySelector('.main__gallery-image')            

    useEffect(() => { 
        let slideVisible = document.querySelector('.slide-visible')
        let imgOfSlideVisible = slideVisible.querySelector('.main__gallery-image')      
        console.log("test", imgOfSlideVisible.id);
    }, [window])

    return (
        <>
            {/* <div className="main__gallery-content">
                <div className="main__gallery-container">
                    <span className="main__gallery-title">{obj.title}</span>
                    <button ref={myRef} id={obj._id} onClick={handleClick} className="main__gallery-button">View Info</button>           
                </div>    
            </div>      */}            
        </>
    )
}