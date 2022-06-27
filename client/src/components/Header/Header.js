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
                    <Link className="header__link-user" to="/user" title="user">{auth.userName}</Link>                    
                    <span className="header__link-logout" onClick={logoutHandler} title="log out"></span>                    
                </div>
            </header>
        </>
    )
}