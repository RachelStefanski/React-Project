// App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./Components/BookList.js";
import AddBook from "./Components/AddBook.js";
import Contact from "./Components/Contact.js";
import Home from "./Components/Home.js";
import Layout from "./Components/Layout.js";
import { useState, useEffect } from "react";

function App() {
  const [showAddBook, setShowAddBook] = useState(false);
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks((prev) => [...prev, book]);
    setShowAddBook(false);
  };

  useEffect(() => {
    (async function () {
      const res = await fetch("/api/books");
      const data = await res.json();
      const dataWithDates = data.map((book) => ({
        ...book,
        published_date: new Date(book.published_date),
      }));
      setBooks(dataWithDates);
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <BookList books={books} setBooks={setBooks} />
              <div className="add-book-toggle">
                <button
                  className="floating-add-button"
                  onClick={() => setShowAddBook((prev) => !prev)}
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
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

