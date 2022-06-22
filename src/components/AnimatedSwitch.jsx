import { Route, Routes, useLocation } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import About from "../pages/About"
import Home from "../pages/Home"
import Login from "../pages/Login"
import '../styles.css'

export const AnimatedSwitch = () => {
  const location = useLocation()

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.pathname} classNames="page" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<About />} />
          <Route path="/about" element={<Login />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}