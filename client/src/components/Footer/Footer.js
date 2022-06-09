import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => { 
    return (
        <footer className="footer">
            <div className="footer__container">
                <Link className="footer__link-contacts" to="/contacts" title="contacts">Contacts</Link>
                <span className="footer__logo" title="home"><Link to="/"/></span>
                <ul className="footer__list-social">
                    <li><a className="pin" title="pinterest" target="_blank" href="https://www.pinterest.ru/"></a></li>
                    <li><a className="twi" title="twitter" target="_blank" href="https://twitter.com/"></a></li>
                </ul>
                <span className="footer__copyright"><Link title="copyright" to="/">Copyright © 2022 <b>MOVIE</b>. <br/>All Rights Reserved.</Link></span>                
            </div>
        </footer>
    )
}