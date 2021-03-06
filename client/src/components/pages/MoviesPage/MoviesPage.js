import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useApiRequest } from "../../../api/useApiRequest";
import { CardsContent } from "./CardsContent/CardsContent";
import { Gallery } from "./Gallery/Gallery";
import { ModalCard } from "./ModalCard/ModalCard";
import { Loader } from "../../Loader/Loader";
import { PanelFilter } from "./PanelFilter/PanelFilter";

export const MoviesPage = () => {
    const [showModalCard, setShowModalCard] = useState(false)
    const [elementID, setElementID] = useState("")
    const [valueOption, setValueOption] = useState("all genres")
    const [searchToggle, setSearchToggle] = useState(false)
    const [filteredMovieCard, setFilteredMovieCard] = useState([])    

    useApiRequest()

    const dataForCards = useSelector((state) => state.movies.movies)
    const loading = useSelector((state) => state.movies.loader)    

    { showModalCard ? document.body.classList.add("modal-full") : document.body.classList.remove("modal-full") }

    return (
        <main className="main">
            {loading ? <div className="loader-container"><Loader /></div>: <>
                <Gallery dataForCards={dataForCards} showModalCard={showModalCard} setShowModalCard={setShowModalCard} setElementID={setElementID} />
                <div className="main__content">
                    <PanelFilter dataForCards={dataForCards} setValueOption={setValueOption} setSearchToggle={setSearchToggle} setFilteredMovieCard={setFilteredMovieCard} />
                    <CardsContent dataForCards={searchToggle ? filteredMovieCard : dataForCards} setShowModalCard={setShowModalCard} setElementID={setElementID} valueOption={valueOption} />
                </div>
                {<ModalCard elementID={elementID} showModalCard={showModalCard} setShowModalCard={setShowModalCard} dataForModalCard={dataForCards} /> }                      
            </>}
        </main>
    )
}