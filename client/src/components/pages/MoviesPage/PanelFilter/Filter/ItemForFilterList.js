import React from "react";

export const ItemForFilterList = (props) => { 
    const { el } = props
    return (
        <>
            <input type="radio" className="select__input" id={el} name={el} title={el} value={el}/>
            <label className="select__label" htmlFor={el}>{el}</label>             
        </>
    )
}