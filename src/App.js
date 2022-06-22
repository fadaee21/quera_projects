import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Links from './components/Links/index'
import ScrollToTop from './components/ScrollToTop/index'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import './styles.css'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <>
        <ScrollToTop />
        <Links />
        <TransitionGroup component={null}>
          <CSSTransition key={location.pathname} classNames="page" timeout={300}>
          {/* <CSSTransition key={location.pathname} classNames="next"timeout={500}> */}
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<About />} />
              <Route path="/about" element={<Login />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Links />
      </>
    </div>
  )
}

export default App
