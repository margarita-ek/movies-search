import React from "react";
import { CardsContent } from "../CardsContent";
import { Gallery } from "../Gallery";
import { PanelFilter } from "../PanelFilter";

export const MoviesPage = () => { 
    return (
        <main className="main">
            <Gallery/>
                <div className="main__content">
                    <PanelFilter/>
                    <CardsContent/>
                </div>
        </main>
    )
}