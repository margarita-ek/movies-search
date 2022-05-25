import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => { 
    return (
        <>
            <footer className="footer">
                <Link className="footer__link-contacts" to="/contacts" title="contacts">Contacts</Link>
                <span className="footer__logo" title="home"><Link to="/"/></span>
                <ul>
                    <li><Link className="footer__link-social" to="/"><img alt="pinterest" title="pinterest"/></Link></li>
                    <li><Link className="footer__link-social" to="/"><img alt="twitter" title="twitter"/></Link></li>
                </ul>
            </footer>
        </>
    )
}