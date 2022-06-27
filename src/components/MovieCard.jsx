import React from 'react'

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img className="card-img" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-description">{movie.short_description}</p>
      </div>
    </div>
  )
}

export default MovieCard
