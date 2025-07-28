// TopBooks.js
import React from 'react';
import Book from './Book.js';
import './TopBooks.css';

function TopBooks({ books, onIncreaseAmount, onDelete, onRate }) {
  return (
    <div className="top-books-hero">
      <div className="hero-background">
        <div className="floating-elements">
          <div className="floating-book">📚</div>
          <div className="floating-star">⭐</div>
          <div className="floating-crown">👑</div>
          <div className="floating-book">📖</div>
          <div className="floating-star">✨</div>
        </div>
      </div>
      
      <div className="top-books-content">
        <div className="top-books-header">
          <div className="crown-container">
            <span className="crown-icon">👑</span>
          </div>
          <h1 className="top-books-title">Top books</h1>
          <p className="top-books-subtitle">The three highest rated in our collection</p>
          <div className="title-underline"></div>
        </div>
        
        <div className="top-books-podium">
          {books.map((book, index) => {
            const rank = index + 1;
            const avgRating = book.numOfRaitings 
              ? (book.sumOfRaitings / book.numOfRaitings).toFixed(1) 
              : 0;
            
            return (
              <div key={book.id} className={`podium-position rank-${rank}`}>
                <div className="rank-badge">
                  <span className="rank-number">{rank}</span>
                </div>
                <div className="podium-step">
                  <div className="step-height"></div>
                </div>
                <div className="book-wrapper">
                  <div className="rating-display">
                    <span className="rating-stars">
                      {'⭐'.repeat(Math.round(avgRating))}
                    </span>
                    <span className="rating-number">{avgRating}</span>
                  </div>
                  <Book
                    {...book}
                    onIncreaseAmount={onIncreaseAmount}
                    onDelete={onDelete}
                    onRate={onRate}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopBooks;