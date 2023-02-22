// BASE IMPORTS + MODULES
import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

// STYLES
import './App.css'

// PAGES + COMPONENTS
import { Home, NotFound } from './pages';
import { Navbar } from './components'

const App = () => {
  return (
    <Router>
      {/* NAVBAR AS A DEFAULT FOR EVERY PAGE */}
      <Navbar />

      {/* MAIN ROUTES */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>

      {/* FOOTER AS A DEFAULT FOR EVERY PAGE  */}
      {/* <h1>Footer</h1> */}
    </Router>
  )
}

export default App