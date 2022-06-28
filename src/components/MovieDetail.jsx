import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail() {
  const [movie, setMovie] = useState({})

  const { movieId } = useParams()

  useEffect(() => {
    fetch(`http://localhost:9000/movies/${movieId}`)
      .then((res) => res.json())
      .then((movies) => setMovie(movies))
  }, [movieId])

  return (
    <div className="movie-detail container">
      <div className="detail-body">
        <div>
          <h2 className="card-title">
            {movie.title}
            <span className="release-year"> {movie.release_year}</span>
          </h2>
          <div className="detail-description">
            <p className="card-description">{movie.description}</p>
          </div>
        </div>
        <div className="images">
          <img className="detail-img" src={movie.image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
