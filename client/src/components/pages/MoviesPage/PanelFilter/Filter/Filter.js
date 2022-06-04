import React, { useEffect, useRef, useState } from "react";
import { ItemForFilterList } from "./ItemForFilterList";

export const Filter = (props) => { 
    const { dataForCards, setValueOption } = props

    const [showDisplay, setShowDisplay] = useState(true)

    const selectRef = useRef()
    const titleRef = useRef()

    const allLabels = document.querySelectorAll(".select__label")

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

    const handleClick = (event) => { 
        setValueOption(event.target.value)
    }

    const changeDisplay = () => { 
        setShowDisplay(!showDisplay)
    }

    useEffect(() => { 
        showDisplay ? selectRef.current.setAttribute("data-state", "active") : selectRef.current.setAttribute("data-state", "")
        for (let i = 0; i < allLabels.length; i++) {
            allLabels[i].addEventListener('click', (evt) => {
                titleRef.current.textContent = evt.target.textContent;
                setShowDisplay(false)
            });
        }
    }, [showDisplay, allLabels])

    return (
        <div className="filter-panel__select select" data-state="" ref={selectRef}>
            <div className="select__title" onClick={changeDisplay} ref={titleRef}>all genres</div>
            <div className="select__list" onClick={handleClick}>
                <input type="radio" className="select__input" id="optionDefault" name="optionDefault" value="all genres"/>
                <label className="select__label" htmlFor="optionDefault">all genres</label>
                {arrForSelect !== undefined ? arrForSelect.map(el => <ItemForFilterList key={el} el={el}/>) : null}
            </div>
        </div>
    )
}