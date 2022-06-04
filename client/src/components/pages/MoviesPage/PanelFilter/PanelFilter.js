import React, { useEffect, useState } from "react";
import { Filter } from "./Filter/Filter";
import { Search } from "./Search/Search";

export const PanelFilter = (props) => {
    const { dataForCards, setValueOption } = props
    const [cardsMenu, setCardsMenu] = useState(false)

    const handleClick = () => { 
        setCardsMenu(!cardsMenu)
    }   

    return (
        <div className="main__filter-panel filter-panel">
            <Filter dataForCards={dataForCards} setValueOption={setValueOption} />
            <Search />
            <div onClick={() => handleClick()} className={`filter-panel__cards-menu${cardsMenu ? " columnMenu" : ""}`}></div>
        </div>
    )
}