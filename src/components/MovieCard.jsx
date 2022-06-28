import React from 'react'
import { Link,  } from 'react-router-dom'

function MovieCard({ movie }) {

  return (
    <div className="movie-card">
      <img className="card-img" src={movie.imageUrl} alt={movie.title} />
      <div className="card-body">
        <Link to={"movies/"+movie.id}><h2 className="card-title">{movie.title}</h2></Link>
        <p className="card-description">{movie.short_description}</p>
      </div>
    </div>
  )
}

export default MovieCard
