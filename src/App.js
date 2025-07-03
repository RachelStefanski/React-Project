import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import BookList from './Components/BookList.js';
import AddBook from './Components/AddBook.js';
import Contact from './Components/Contact.js';
import Home from './Components/Home.js';
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
  const [showAddBook, setShowAddBook] = useState(false);
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks(prev => [...prev, book]);
    setShowAddBook(false);
  };

  useEffect(() => {
    (async function () {
      const res = await fetch('/api/books');
      const data = await res.json();
      const dataWithDates = data.map(book => ({
        ...book,
        published_date: new Date(book.published_date)
      }));
      setBooks(dataWithDates);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Bookstore</h1>
        <p>Welcome! Find the Next Book You Want to Read</p>
      </header>

      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/">Books</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <div className="banner">
        📚 Summer Sale! 20% Off All New Books 📚
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <BookList books={books} setBooks={setBooks} />
              <div className="add-book-toggle">
                <button
                  className="floating-add-button"
                  onClick={() => setShowAddBook(prev => !prev)}
                >
                  ➕ Add new book
                </button>

                {showAddBook && (
                  <div className="add-book-popup">
                    <AddBook onAddBook={handleAddBook} />
                  </div>
                )}
              </div>
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </div>
  );
}



export default App;
