import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Bookstore</h1>
      <p className="home-subtitle">Where stories come alive 📚</p>

      <div className="home-content">
        <p>
          At <strong>My Bookstore</strong>, we believe that a good book can change your world.
          From timeless classics to modern bestsellers, we carefully curate our collection
          to ensure that every reader finds something to fall in love with.
        </p>

        <p>
          🏆 Our store is rated top by thousands of book lovers for our excellent service,
          warm atmosphere, and unbeatable prices.
        </p>

        <p>
          Whether you’re looking for your next adventure, deep philosophy, or fun for the kids —
          we’ve got you covered.
        </p>

        <p className="call-to-action">
📦 Free shipping on orders over $25! Visit the <Link to="/">Books</Link> section and start exploring.
        </p>
      </div>
    </div>
  );
}

export default Home;
