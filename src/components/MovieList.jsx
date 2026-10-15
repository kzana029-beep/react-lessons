import React, { useState } from 'react'
import movies from '../data/movies'
import MovieCard from "../components/MovieCard"

function MovieList() {
    const [wishList, setWishList] = useState([])
   
  return (
    <section>
        <div className="section-header">
            <p>
                tonight
            </p>
            <h2>movies</h2>
            <p>{movies.length} movies </p>

        </div>
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    category={movie.category}
                    time={movie.time}
                    hall={movie.hall}
                    price={movie.price}
                    available={movie.available}
                    style={movie.style}
                />
            ))}
        </div>
    </section>
  )
}

export default MovieList