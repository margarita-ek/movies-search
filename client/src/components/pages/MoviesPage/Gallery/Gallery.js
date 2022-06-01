import React, { useEffect } from "react";
import Carousel from "nuka-carousel";

export const Gallery = (props) => {
    const { dataForCards } = props

    let filterObjForGallery = dataForCards.filter(el => el.hasOwnProperty("gallery"))

    return (
        <div className="main__gallery">
            <Carousel style={{ overflow: 'hidden', height: 'calc(100vh - 80px)' }}
                adaptiveHeight={false}
                animation={"fade"}
                autoplay={true}
                autoplayInterval={4000}
                wrapAround={true}
                pauseOnHover={false}
                renderBottomCenterControls={null}
                defaultControlsConfig={{
                nextButtonText: ' ',
                prevButtonText: ' ',
                    prevButtonStyle: {
                        width: '70px',
                        height: '70px',
                        backgroundSize: '30px',
                        backgroundPosition: 'center',
                        background: 'url("../img/items/prevG.svg") no-repeat',
                    },
                    nextButtonStyle: {
                        width: '70px',
                        height: '70px',
                        marginRight: '18px',
                        backgroundSize: '30px',
                        backgroundPosition: 'center',
                        background: 'url("../img/items/nextG.svg") no-repeat',
                    }
                }}>
                {(dataForCards.length && filterObjForGallery.length) !== 0 ? filterObjForGallery.map(obj => <><img key={obj._id} src={`../img/gallery${obj.gallery}`}/> <button className="main__button">View Info</button></>) : null}
            </Carousel>
        </div>
    )
}
