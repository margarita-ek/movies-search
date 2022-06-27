import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export const UserPage = () => { 
    const auth = useContext(AuthContext)
    
    return (
        <main className="main">
            <div className="main__contacts contacts">
                <div className="contacts__content">
                    <span className="contacts__title">{auth.userName}</span>
                    <span className="contacts__subtitle">{auth.userEmail}</span>
                </div>
            </div>
        </main>
    )
}