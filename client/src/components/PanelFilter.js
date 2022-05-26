import React from "react";

export const PanelFilter = () => { 
    return (
        <div className="main__filter-panel">
            <select title="filter genre" className="list-menu">
                <option selected>All Genres</option>
                <option>Test</option>
                <option>Test</option>
                <option>Test</option>
            </select>
            <div className="cards-menu">Test Item</div>
        </div>
    )
}