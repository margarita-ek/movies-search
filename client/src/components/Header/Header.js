import React, { useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom"
import { MoviesPage } from "../pages/MoviesPage/MoviesPage";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <span className="header__logo" title="home"><Link to="/"/></span>
                    <Link className="header__link-contacts" to="/contacts" title="contacts">Contacts</Link>                    
                </div>
            </header>
            <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
        </>
    )
}