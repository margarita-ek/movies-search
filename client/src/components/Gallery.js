import React from "react";
import Carousel from "nuka-carousel";

export const Gallery = () => {
    return (
        <div className="main__gallery">
            <Carousel style={{ overflow: 'hidden', height: 'calc(100vh - 80px)' }}
                adaptiveHeight={false}
                animation={"fade"}
                autoplay={true}
                autoplayInterval={3000}
                wrapAround={true}
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
                <img src="../img/gallery/doctorGal.jpg"/>
                <img src="../img/gallery/batmanGal.jpg"/>
                <img src="../img/gallery/spiderGal.jpg"/>
                <img src="../img/gallery/adamGal.jpg"/>
            </Carousel>

        </div>
    )
}
