import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetail from './components/MovieDetail'
import NotFound from './components/NotFound'
import { JustPractice } from './components/JustPractice'
import { JustPractice2 } from './components/JustPractice2'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Movies />} >
          <Route path='/practice' element={<JustPractice />} />
        </Route>
        <Route path='/practice/practice2' element={<JustPractice2 />} />
        <Route path='/movies/:movieId' element={<MovieDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
