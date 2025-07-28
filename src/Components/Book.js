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
  onRate
}) {
  const [liked, setLiked] = useState(false);
  const [showRatingPanel, setShowRatingPanel] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);



  const rating = numOfRaitings > 0 ? sumOfRaitings / numOfRaitings : 0;
  const finalPrice = Number(price) * ((100 - Number(discount)) / 100);
  const isOnSale = discount > 0;
  const isOutOfStock = amount === 0;
  const isIncomplete = !nameb || !price || !published_date;

  const className = `book${isIncomplete ? " incomplete" : ""}${isOnSale ? " on-sale" : ""}${isOutOfStock ? " out-of-stock" : ""}${liked ? " liked" : ""}`;

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
      <StarRating rating={rating} numOfRatings={numOfRaitings} />

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
          color: hoveredStar >= val ? '#f5c518' : '#ccc',
        }}
        onMouseEnter={() => setHoveredStar(val)}
        onMouseLeave={() => setHoveredStar(0)}
        onClick={() => {
          onRate(id, val);         // עדכון הדירוג דרך BookList
          setShowRatingPanel(false); // סגירת הפאנל
        }}
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