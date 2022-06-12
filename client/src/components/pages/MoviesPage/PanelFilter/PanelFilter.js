import React from "react";
import { Filter } from "./Filter/Filter";
import { Search } from "./Search/Search";

export const PanelFilter = (props) => {
    const { dataForCards, setValueOption, setSearchToggle, setFilteredMovieCard } = props

    return (
        <div className="main__filter-panel filter-panel">
            <div className="filter-panel__container">
                <Filter dataForCards={dataForCards} setValueOption={setValueOption} />
                <Search dataForCards={dataForCards} setSearchToggle={setSearchToggle} setFilteredMovieCard={setFilteredMovieCard} />
            </div>
        </div>
    )
}