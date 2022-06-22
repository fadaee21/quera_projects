import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AnimatedSwitch } from './components/AnimatedSwitch'
import Links from './components/Links/index'
import ScrollToTop from './components/ScrollToTop/index'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Links />
        <AnimatedSwitch />
        <Links />
      </BrowserRouter>
    </div>
  )
}

export default App
