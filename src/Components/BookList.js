import React from 'react';
import Book from './Book.js';

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
    // עדכון בשרת
    const res = await fetch(`/api/books/${id}/amount`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: newAmount }),
    });
    if (res.ok) {
      const updatedBook = await res.json();
      // עדכון בצד הקליינט
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

//שליחה לשרת
await fetch(`/api/books/${id}/rate`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ rate })  // שלחי רק את הדירוג
});

//עדכון בריאקט
  setBooks(prev =>
    prev.map(b => b.id === id ? updatedBook : b)
  );
};


  const deleteBook = async (id) => {
    const book = books.find(b => b.id === id);
    if (!book) return;
    // שליחת בקשת מחיקה לשרת
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
    <div className="books-container">
      <h2>📚 Top 3 Rated Books</h2>
      {top3Books.map((book) => (
        <Book
          key={book.id}
          {...book}
          onIncreaseAmount={increaseAmount}
          onDelete={deleteBook}
          onRate={handleRate}
        />
      ))}
      <h2>📚 All Books</h2>
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
  );
}

export default BookList;
