import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Links from './components/Links'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <Links />
      <ScrollToTop />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Links />
    </BrowserRouter>
  )
}

export default App
