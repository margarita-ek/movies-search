import React, { useEffect, useRef } from "react";
import Carousel from "nuka-carousel";
import { GalleryImg } from "./GalleryImg";
import { GalleryContent } from "./GalleryContent";

export const Gallery = (props) => {
    const { dataForCards, setElementID, setShowModalCard } = props

    let filterObjForGallery = dataForCards.filter(el => el.hasOwnProperty("gallery"))

    return (
        <div className="main__gallery">
            <Carousel style={{ overflow: "hidden", height: "calc(100vh - 80px)" }}              
                adaptiveHeight={false}
                animation={"fade"}
                // autoplay={true}
                autoplay={false}
                autoplayInterval={4000}
                wrapAround={true}
                pauseOnHover={false}
                renderBottomCenterControls={null}
                defaultControlsConfig={{
                nextButtonText: " ",
                prevButtonText: " ",
                    prevButtonStyle: {
                        width: "70px",
                        height: "70px",
                        backgroundSize: "30px",
                        backgroundPosition: "center",
                        background: "url('../img/items/prevG.svg') no-repeat",
                    },
                    nextButtonStyle: {
                        width: "70px",
                        height: "70px",
                        marginRight: "18px",
                        backgroundSize: "30px",
                        backgroundPosition: "center",
                        background: "url('../img/items/nextG.svg') no-repeat",
                    }
                }}>
                {(dataForCards.length && filterObjForGallery.length) !== 0 ? filterObjForGallery.map(obj => <GalleryImg key={obj._id} obj={obj} setElementID={setElementID} setShowModalCard={setShowModalCard} />) : null}
            </Carousel>
                {(dataForCards.length && filterObjForGallery.length) !== 0 ? filterObjForGallery.map(obj => <GalleryContent key={obj._id} obj={obj} setElementID={setElementID} setShowModalCard={setShowModalCard} />) : null}            
            {/* <div className="main__gallery-description"></div> */}
        </div>
    )
}
