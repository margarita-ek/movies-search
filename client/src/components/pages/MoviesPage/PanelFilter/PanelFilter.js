import React from "react";

export const PanelFilter = () => { 
    return (
        <div className="main__filter-panel">
            <select title="filter genre" className="list-menu">
                <option defaultValue="1">All Genres</option>
                <option value="2">Test</option>
                <option value="3">Test</option>
                <option value="3">Test</option>
            </select>
            <div className="cards-menu">Test Item</div>
        </div>
    )
}