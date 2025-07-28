import React, { useState } from "react";
import Categories from "./Categories.js";
import "./AddBook.css";

function AddBook({ onAddBook }) {
  const [newBook, setNewBook] = useState({
    nameb: "",
    author: "",
    categories: [],
    published_date: "",
    amount: 0,
    discount: 0,
    price: 0,
    numOfRaitings: 10,
    sumOfRaitings: 50
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setNewBook((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, value]
        : prev.categories.filter((cat) => cat !== value),
    }));

  };

  const handleSubmit = async () => {
    const bookToSend = {
      ...newBook,
      published_date: new Date(newBook.published_date),
      numOfRaitings: 0,
      sumOfRaitings: 0,
    };

    const res = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookToSend),
    });

    if (res.ok) {
      const data = await res.json();
      data.published_date = new Date(data.published_date); // ✅ להמיר ל- Date
      console.log("Book added:", data);
      onAddBook(data); // שליחה ל-App

      // ניקוי הטופס:
      setNewBook({
        nameb: "",
        author: "",
        categories: [],
        published_date: "",
        amount: 0,
        discount: 0,
        price: 0,
      });
    } else {
      console.error("Failed to add book");
    }
  };


  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>

      <div className="form-group">
        <label>Name</label>
        <input name="nameb" value={newBook.nameb} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>Author</label>
        <input name="author" value={newBook.author} onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label>Categories</label>
        <ul className="category-list">
          {Object.entries(Categories).map(([key, label]) => (
            <li key={key}>
              <label>
                <input
                  type="checkbox"
                  value={label}
                  onChange={handleCheckboxChange}
                  checked={newBook.categories.includes(label)}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="form-group">
        <label>Published Date</label>
        <input
          type="date"
          name="published_date"
          value={newBook.published_date}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Amount in Stock</label>
        <input
          type="number"
          name="amount"
          value={newBook.amount}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Discount (%)</label>
        <input
          type="number"
          name="discount"
          value={newBook.discount}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Price ($)</label>
        <input
          type="number"
          name="price"
          value={newBook.price}
          onChange={handleInputChange}
        />
      </div>

      <button className="add-button" onClick={handleSubmit}>
        ➕ Add Book
      </button>
    </div>
  );
}

export default AddBook;