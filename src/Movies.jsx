import React from "react";
import './Movies.css'; // Import your CSS file for styling

function Movies() {
  // Sample data for movies
  const movies = [
    { id: 1, title: "Solo Leveling (2024)", poster: "https://vegamovies.ong/wp-content/uploads/2024/01/Solo-Leveling.jpg", rating: 7.5 },
    { id: 2, title: "Heartbreak Agency (2024)", poster: "https://vegamovies.ong/wp-content/uploads/2023/11/Jujutsu-Kaisen-Season-1-%E2%80%93-2.jpg", rating: 8.0 },
    { id: 3, title: "IMAX", poster: "https://vegamovies.ong/wp-content/uploads/2024/02/The-Marvels-Vegamovies-Poster-I-Max.jpg", rating: 6.5 },
    { id: 1, title: "WILL – Netflix", poster: "https://vegamovies.ong/wp-content/uploads/2024/01/WILL-Netflix-Original.jpg", rating: 7.5 },
    { id: 2, title: "Flatliners", poster: "https://vegamovies.ong/wp-content/uploads/2021/01/I-Frankenstein-2014-Hindi-Vegamovies.jpg", rating: 8.0 },
    { id: 3, title: "Cleanskin", poster: "https://vegamovies.ong/wp-content/uploads/2024/02/Cleanskin-Hindi-Dubbed-2012.jpg", rating: 6.5 },
    // Add more movie data if needed
  ];
  return (
    <div className="container">
      <h1>Welcome to Movie Page</h1>
      <section className="movies">
        <h2>Movies</h2>
        <div className="card-container">
          {movies.map((movie) => (
            <div className="card" key={movie.id}>
              <img src={movie.poster} alt={movie.title} />
              <div className="card-body">
                <h3>{movie.title}</h3>
                <p>Rating: {movie.rating}</p>
                <button className="like-button"><i className="far fa-heart"></i> Like</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Movies;
