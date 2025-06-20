import React, { useState } from "react";
import Categories from "./Categories";
import "./AddBook.css";

function AddBook({ onAddBook }) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [publishedDate, setPublishedDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(0);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedCategories(prev =>
      e.target.checked ? [...prev, value] : prev.filter(cat => cat !== value)
    );
  };

  const handleSubmit = () => {
    const newBook = {
      nameb: name,
      author,
      categories: selectedCategories,
      published_date: new Date(publishedDate),
      amount: Number(amount),
      discount: Number(discount),
      price: Number(price),
    };
    onAddBook(newBook);

    setName("");
    setAuthor("");
    setSelectedCategories([]);
    setPublishedDate("");
    setAmount(0);
    setDiscount(0);
    setPrice(0);
  };

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      <div className="form-group">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Categories</label>
        <ul className="category-list">
          {Object.entries(Categories).map(([key, label], index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  value={label}
                  onChange={handleCheckboxChange}
                  checked={selectedCategories.includes(label)}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="form-group">
        <label>Published Date</label>
        <input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Amount in Stock</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Discount (%)</label>
        <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Price ($)</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button className="add-button" onClick={handleSubmit}>➕ Add Book</button>
    </div>
  );
}

export default AddBook;
