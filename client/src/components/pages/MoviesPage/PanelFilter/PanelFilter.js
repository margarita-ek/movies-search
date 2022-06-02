import React, { useEffect, useState } from "react";

export const PanelFilter = (props) => {
    const { dataForCards, setValueOption } = props

    const getGenresFromArray = dataForCards.map((obj) => { 
        for (const key in obj) {
            if (key === "genre") {
                const element = obj[key];
                return element
            }
        }        
    })

    const filterGenresValues = () => { 
        const setGenres = new Set()
        getGenresFromArray.forEach(el => setGenres.add(el))
        if (setGenres.size !== 0) { 
            return Array.from(setGenres)
        }
        return
    }
    
    const arrForSelect = filterGenresValues()

    const handleChange = (event) => { 
        setValueOption(event.target.value)
    }

    return (
        <div className="main__filter-panel filter-panel">
            <select onChange={handleChange} className="filter-panel__select" title="filter genre">
                <option className="filter-panel__option" defaultValue="all genres" title="all genres">all genres</option>
                {arrForSelect !== undefined ? arrForSelect.map(el => <option className="filter-panel__option" title={el} key={el} value={el}>{el}</option>) : null}
            </select>
            <div className="cards-menu">Test Item</div>
        </div>
    )
}