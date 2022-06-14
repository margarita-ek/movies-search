import React from "react";
import { GalleryImg } from "./GalleryImg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Gallery = (props) => {
    const { dataForCards, setElementID, setShowModalCard } = props

    let filterObjForGallery = dataForCards.filter(el => el.hasOwnProperty("gallery"))

    var settings = {
        adaptiveHeight: true,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="main__gallery">
            <Slider {...settings}>
                {(dataForCards.length && filterObjForGallery.length) !== 0 ? filterObjForGallery.map(obj => <GalleryImg key={obj._id} obj={obj} setElementID={setElementID} setShowModalCard={setShowModalCard} />) : null}
            </Slider>
        </div>
    )
}

