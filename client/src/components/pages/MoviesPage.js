import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useApiRequest } from "../../api/useApiRequest";
import { CardsContent } from "../CardsContent";
import { Gallery } from "../Gallery";
import { ModalCard } from "../ModalCard";
import { PanelFilter } from "../PanelFilter";

export const MoviesPage = () => {
    const [showModalCard, setShowModalCard] = useState(false)
    const dataForCards = useSelector((state) => state.movies.movies)
    useApiRequest()

    return (
        <main className="main">
                <Gallery/>
                <div className="main__content">
                    <PanelFilter/>
                    <CardsContent dataForCards={dataForCards} showModalCard={showModalCard} setShowModalCard={setShowModalCard}/>
                </div>
        </main>
    )
}