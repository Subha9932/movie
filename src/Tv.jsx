import React, { useState } from "react";
import './App.css'; // Import your CSS file for styling

function TVSeries() {
  // Sample data for TV series
  const [likedSeries, setLikedSeries] = useState([]);

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
    if (likedSeries.includes(itemId)) {
      // Unlike the item
      setLikedSeries(likedSeries.filter(id => id !== itemId));
    } else {
      // Like the item
      setLikedSeries([...likedSeries, itemId]);
    }
  };

  return (
    <div className="container">
      <h1>Welcome to TV Series Page</h1>
      <section className="tv-series">
        <h2>TV Series</h2>
        <div className="card-container">
          {tvSeries.map((series) => (
            <div className="card" key={series.id}>
              <img src={series.poster} alt={series.title} />
              <div className="card-body">
                <h3>{series.title}</h3>
                <p>Rating: {series.rating}</p>
                <button className={`like-button ${likedSeries.includes(series.id) && 'liked'}`} onClick={() => handleLike(series.id)}>
                  <i className="far fa-heart"></i> Like
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TVSeries;
