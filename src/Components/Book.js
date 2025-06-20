import React, { useState } from 'react';
import './Book.css';
import StarRating from './StarRating.js';

function Book({
  id,
  nameb,
  author = "anonymous",
  categories = [],
  published_date = new Date(),
  price,
  discount = 0,
  amount,
  onIncreaseAmount,
  onDelete,
  onAdd,
  numOfRaitings = 0,
  sumOfRaitings = 0,
}) {
  const [liked, setLiked] = useState(false);
  const [showRatingPanel, setShowRatingPanel] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedRating, setSelectedRating] = useState(null);
  const [localNum, setLocalNum] = useState(numOfRaitings);
  const [localSum, setLocalSum] = useState(sumOfRaitings);

  const rating = localNum > 0 ? localSum / localNum : 0;
  const finalPrice = Number(price) * ((100 - Number(discount)) / 100);
  const isOnSale = discount > 0;
  const isOutOfStock = amount === 0;
  const isIncomplete = !nameb || !price || !published_date;

  const className = `book${isIncomplete ? " incomplete" : ""}${isOnSale ? " on-sale" : ""}${isOutOfStock ? " out-of-stock" : ""}${liked ? " liked" : ""}`;

  const handleRate = (value) => {
    setSelectedRating(value);
    setLocalNum(prev => prev + 1);
    setLocalSum(prev => prev + value);
    setShowRatingPanel(false); // סגירה אחרי דירוג
  };

  return (
    <div className={className}>
      {/* לייק, SALE וכו' */}
      <button
        className={`heart-button ${liked ? "liked" : ""}`}
        onClick={() => setLiked(!liked)}
        aria-label="Like this book"
      >
        ❤️
      </button>
      {isOnSale && <div className="sale-ribbon">SALE</div>}
      <h2>{nameb}</h2>
      <p>Author: {author}</p>
      <p>Category: {categories.join(', ') || "No categories"}</p>
      <p>Published: {published_date.toLocaleDateString()}</p>
      <p>In Stock: {amount}</p>

      {/* כפתור הגדלה */}
      <button className="small-button" onClick={() => onIncreaseAmount(id)}>➕</button>

      {/* מחיר */}
      {discount > 0 ? (
        <>
          <p>Discount: {discount}%</p>
          <span>Price: </span>
          <span className="price-regular">{price}$</span>
          <span className="final-price">{finalPrice.toFixed(2)}$</span>
        </>
      ) : (
        <p className="final-price">Price: {price}$</p>
      )}

      {/* מחיקה */}
      <button className="small-button delete-button" onClick={() => onDelete(id)}>🗑️</button>

      {/* דירוג */}
      <StarRating rating={rating} numOfRatings={localNum} />

      <button onClick={() => setShowRatingPanel(prev => !prev)}>
        {showRatingPanel ? "Cancel Rating" : "⭐ Rate Book"}
      </button>

      {showRatingPanel && (
        <div className="rate-stars-panel">
          {[1, 2, 3, 4, 5].map((val) => (
            <span
              key={val}
              style={{
                cursor: 'pointer',
                fontSize: '1.5em',
                color: hoveredStar >= val || selectedRating >= val ? '#f5c518' : '#ccc',
              }}
              onMouseEnter={() => setHoveredStar(val)}
              onMouseLeave={() => setHoveredStar(0)}
              onClick={() => handleRate(val)}
            >
              ★
            </span>
          ))}
        </div>
      )}

      {/* הוספה לעגלה */}
      <button
        className="Addbook-button"
        disabled={amount === 0}
        onClick={() => console.log(`Added ${nameb} to cart`)}
      >
        {amount === 0 ? "Sold Out" : "Add to Cart"}
      </button>
    </div>
  );
}

export default Book;
