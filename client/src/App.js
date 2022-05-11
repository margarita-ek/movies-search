import React, { useCallback, useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { MoviesPage } from './components/MoviesPage';
import { ContactsPage } from './components/ContactsPage';
import { useApiRequest } from './api/useApiRequest';

function App() {
  const movies = useApiRequest()
  
  useEffect(() => { 
    console.log('movies', movies);
  }, [movies])

  return (
      <>
          <header>
              <Link to="/">Главная страница</Link>
              <Link to="/contacts">Страница контактов</Link>
          </header>
          <Routes>
              <Route path="/" element={<MoviesPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
      </>    
  )
}

export default App;
