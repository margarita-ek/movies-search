import React, { useEffect } from "react";

export const ContactsPage = () => { 
    const linkContactsOfHeader = document.querySelectorAll(".header__link-contacts")
    
    return (
        <main className="main">
            <div className="main__contacts contacts">
                <div className="contacts__content">
                    <h1 className="contacts__title">Contacts Page</h1>
                    <h2 className="contacts__subtitle">About company</h2>
                    <div className="contacts__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <h2 className="contacts__subtitle">Social networks</h2>
                    <div className="contacts__social-container">
                        <a className="contacts__social-pin" href="https://www.pinterest.ru/" title="pinterest">Pinterest</a>
                        <a className="contacts__social-twi" href="https://twitter.com/" title="twitter">Twitter</a>
                        <a className="contacts__social-email" href="https://mail.google.com/" title="e-mail">E-mail</a>
                    </div>
                </div>
            </div>
        </main>
    )
}