import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import MovieList from './MovieList'

function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/movies')
      .then((res) => res.json())
      .then((movies) => setMovies(movies))
  }, [])

  return (
    <div className="container">
      <h6><Link to={'practice'}>go to practice page</Link></h6>
      <Outlet/>
      <MovieList movies={movies} />
    </div>
  )
}

export default Movies
