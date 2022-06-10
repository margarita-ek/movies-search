import React, { useState } from "react";
import { Filter } from "./Filter/Filter";
import { Search } from "./Search/Search";

export const PanelFilter = (props) => {
    const { dataForCards, setValueOption, setSearchToggle, setFilteredMovieCard } = props
    const [cardsMenu, setCardsMenu] = useState(false)

    const handleClick = () => { 
        setCardsMenu(!cardsMenu)
    }   

    return (
        <div className="main__filter-panel filter-panel">
            <div className="filter-panel__container">
                <Filter dataForCards={dataForCards} setValueOption={setValueOption} />
                <Search dataForCards={dataForCards} setSearchToggle={setSearchToggle} setFilteredMovieCard={setFilteredMovieCard} />
                {/* <div onClick={() => handleClick()} className={`filter-panel__cards-menu${cardsMenu ? " columnMenu" : ""}`}></div> */}
            </div>
        </div>
    )
}