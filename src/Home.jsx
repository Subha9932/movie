import React, { useState } from "react";
import './App.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function Home() {
  // Sample data for movies and TV series
  const [likedMovies, setLikedMovies] = useState([]);

  const movies = [
    { id: 1, title: "Solo Leveling (2024)", poster: "https://vegamovies.ong/wp-content/uploads/2024/01/Solo-Leveling.jpg", rating: 7.5 },
    { id: 2, title: "Heartbreak Agency (2024)", poster: "https://vegamovies.ong/wp-content/uploads/2023/11/Jujutsu-Kaisen-Season-1-%E2%80%93-2.jpg", rating: 8.0 },
    { id: 3, title: "IMAX", poster: "https://vegamovies.ong/wp-content/uploads/2024/02/The-Marvels-Vegamovies-Poster-I-Max.jpg", rating: 6.5 },
    { id: 1, title: "WILL – Netflix", poster: "https://vegamovies.ong/wp-content/uploads/2024/01/WILL-Netflix-Original.jpg", rating: 7.5 },
    { id: 2, title: "Flatliners", poster: "https://vegamovies.ong/wp-content/uploads/2021/01/I-Frankenstein-2014-Hindi-Vegamovies.jpg", rating: 8.0 },
    { id: 3, title: "Cleanskin", poster: "https://vegamovies.ong/wp-content/uploads/2024/02/Cleanskin-Hindi-Dubbed-2012.jpg", rating: 6.5 },
    // Add more movie data if needed
  ];

  const tvSeries = [
    { id: 1, title: "Expats", poster: "https://vegamovies.ong/wp-content/uploads/2024/01/Expats-2024-Hindi-Dubbed.jpg", rating: 7.2 },
    { id: 2, title: "Reacher", poster: "https://vegamovies.ong/wp-content/uploads/2023/11/Reacher-Season-1-Hindi-Dubbed-TV-Series-2-360x540.jpg", rating: 8.5 },
    { id: 3, title: "FOE (2023)", poster: "https://vegamovies.ong/wp-content/uploads/2024/01/Foe-Hindi-Dubbed-ORG-2023.jpg", rating: 7.8 },
    { id: 1, title: "TThe Moon", poster: "https://vegamovies.ong/wp-content/uploads/2023/12/The-Moon.jpg", rating: 7.2 },
    { id: 2, title: "Detective", poster: "https://vegamovies.ong/wp-content/uploads/2023/12/Detective-Knight-Redemption.jpg", rating: 8.5 },
    { id: 3, title: "Five Nights at", poster: "https://vegamovies.ong/wp-content/uploads/2023/11/Five-Nights-at-Freddys.jpg", rating: 7.8 },
    // Add more TV series data if needed
  ];

  const handleLike = (itemId) => {
    if (likedMovies.includes(itemId)) {
      // Unlike the item
      setLikedMovies(likedMovies.filter(id => id !== itemId));
    } else {
      // Like the item
      setLikedMovies([...likedMovies, itemId]);
    }
  };

  return (
    <div className="container">
      <h1>Welcome to Movie & TV Series App</h1>
      <section className="movies">
        <h2>Movies</h2>
        <div className="card-container">
          {movies.map((movie) => (
            <div className="card" key={movie.id}>
              <img src={movie.poster} alt={movie.title} />
              <div className="card-body">
                <h3>{movie.title}</h3>
                <p>Rating: {movie.rating}</p>
                <button className={`like-button ${likedMovies.includes(movie.id) && 'liked'}`} onClick={() => handleLike(movie.id)}>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="tv-series">
        <h2>TV Series</h2>
        <div className="card-container">
          {tvSeries.map((series) => (
            <div className="card" key={series.id}>
              <img src={series.poster} alt={series.title} />
              <div className="card-body">
                <h3>{series.title}</h3>
                <p>Rating: {series.rating}</p>
                <button className={`like-button ${likedMovies.includes(series.id) && 'liked'}`} onClick={() => handleLike(series.id)}>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
