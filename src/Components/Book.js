import React, { useState } from 'react';
import './Book.css';

function Book({
  nameb,
  author = "anonymous",
  categories = [],
  published_date = new Date(),
  price,
  discount = 0,
  amount
}) {
  const [liked, setLiked] = useState(false);
  const isIncomplete = !nameb || !price || !published_date;
  const isOnSale = discount >= 1;
  const isOutOfStock = amount === 0;
  const finalPrice = Number(price) * ((100 - Number(discount)) / 100);

  const className = `book${isIncomplete ? " incomplete" : ""}${isOnSale ? " on-sale" : ""}${isOutOfStock ? " out-of-stock" : ""}${liked ? " liked" : ""}`;

  return (
    <div className={className}>
      {/* כפתור לב */}
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
      <p>Category: {categories.length > 0 ? categories.join(', ') : "No categories"}</p>
      <p>Published date: {published_date.toLocaleDateString()}</p>
      <p>Amount in stock: {amount}</p>

      {discount > 0 ? (
        <>
          <p>Discount: {discount}%</p>
          <span>Price: </span>
          <span className="price-regular">{price}$</span>
          <span className="final-price">{finalPrice.toFixed(2)}$</span>
        </>
      ) : (
        <div>
          <span>Price: </span>
          <p className="final-price">{price}$</p>
        </div>
      )}

      <button
        className="Addbook-button"
        disabled={amount === 0}
        onClick={() => {
          if (amount > 0) {
            console.log(`You added ${nameb} to the cart`);
          }
        }}
      >
        {amount === 0 ? "Sold out" : "Add to Cart"}
      </button>
    </div>
  );
}

export default Book;
