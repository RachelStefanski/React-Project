// BookList.js
import React from 'react';
import Book from './Book.js';
import TopBooks from './TopBooks.js';
import './BookList.css';

function BookList({ books, setBooks }) {
  const maxRating = (books) => {
    const sortedBooks = [...books].sort((a, b) => {
      const avgA = a.numOfRaitings ? a.sumOfRaitings / a.numOfRaitings : 0;
      const avgB = b.numOfRaitings ? b.sumOfRaitings / b.numOfRaitings : 0;
      return avgB - avgA;
    });
    return sortedBooks.slice(0, 3);
  };

  const top3Books = maxRating(books);
  const restBooks = books.filter(book => !top3Books.includes(book));

  const increaseAmount = async (id) => {
    const book = books.find(b => b.id === id);
    if (!book) return;
    const newAmount = book.amount + 1;
    const res = await fetch(`/api/books/${id}/amount`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: newAmount }),
    });
    if (res.ok) {
      const updatedBook = await res.json();
      setBooks(prev =>
        prev.map(b => b.id === id ? { ...b, amount: updatedBook.amount } : b)
      );
    } else {
      console.error("Failed to update amount");
    }
  };

  const handleRate = async (id, rate) => {
    const book = books.find(b => b.id === id);
    if (!book) return;

    const updatedBook = {
      ...book,
      sumOfRaitings: book.sumOfRaitings + rate,
      numOfRaitings: book.numOfRaitings + 1,
    };

    await fetch(`/api/books/${id}/rate`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rate }),
    });

    setBooks(prev =>
      prev.map(b => b.id === id ? updatedBook : b)
    );
  };

  const deleteBook = async (id) => {
    const book = books.find(b => b.id === id);
    if (!book) return;

    const res = await fetch(`/api/books/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) {
      setBooks(prev => prev.filter(book => book.id !== id));
    } else {
      console.error("Failed to delete book");
    }
  };

  return (
    <div className="books-main-container">
      {/* Top 3 Books Section */}
      {top3Books.length > 0 && (
        <TopBooks
          books={top3Books}
          onIncreaseAmount={increaseAmount}
          onDelete={deleteBook}
          onRate={handleRate}
        />
      )}
      
      {/* All Other Books Section */}
      <div className="all-books-section">
        <div className="all-books-header">
          <h2 className="all-books-title">
            <span className="books-icon">📚</span>
            All books
            <span className="books-count">{restBooks.length}</span>
          </h2>
          <p className="all-books-subtitle">Discover our entire collection</p>
        </div>
        
        {restBooks.length > 0 ? (
          <div className="all-books-grid">
            {restBooks.map((book) => (
              <Book
                key={book.id}
                {...book}
                onIncreaseAmount={increaseAmount}
                onDelete={deleteBook}
                onRate={handleRate}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📖</div>
            <h3>No more books</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookList;