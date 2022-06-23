import React, { useContext, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { MoviesPage } from "../pages/MoviesPage/MoviesPage";
import { UserPage } from "../pages/UserPage/UserPage";


export const Header = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const authPage = () => { navigate('/') }  
    
    const logoutHandler = event => { 
        event.preventDefault()
        auth.logout()
        authPage()
    }

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <span className="header__logo" title="home"><Link to="/home"/></span>
                    <Link className="header__link-contacts" to="/user" title="user">User Page</Link>                    
                    <span className="header__link-contacts" onClick={logoutHandler} title="log out">Log Out</span>                    
                </div>
            </header>
            <Routes>
                <Route path="/home" element={<MoviesPage />} />
                <Route path="/user" element={<UserPage />} />
            </Routes>
        </>
    )
}