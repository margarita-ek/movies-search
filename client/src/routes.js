import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MoviesPage } from './components/pages/MoviesPage/MoviesPage'
import { UserPage } from './components/pages/UserPage/UserPage'
import { AuthPage } from './components/pages/AuthPage/AuthPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/home" element={<MoviesPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="*" element={<MoviesPage />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="*" element={<AuthPage />} />
        </Routes>
    )
}