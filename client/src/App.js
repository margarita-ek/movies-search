import React from 'react'
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./routes";
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
    const { token, login, logout, userId, userEmail, userName, ready  } = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
    <AuthContext.Provider value={{
        token, login, logout, userId, userEmail, userName, ready, isAuthenticated
    }}>
        { isAuthenticated && <div className='wrapper'>
            <Header />
            <Footer />
        </div> }
        <div className='container'>
            { routes }
        </div>
    </AuthContext.Provider>  
    )
}

export default App;
