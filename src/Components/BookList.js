import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Categories from './Categories';
import Book from './Book';

// שימוש ב-forwardRef כדי לאפשר ל-App לקרוא ל-addBook מבחוץ
const BookList = forwardRef((props, ref) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      nameb: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      categories: [Categories.aduls, Categories.children],
      published_date: new Date(2021, 4, 3),
      price: 10.99,
      discount: 10,
      amount: 0,
      numOfRaitings: 10,
      sumOfRaitings: 50
    },
    {
      id: 2,
      nameb: "To Kill a Mockingbird",
      author: "Harper Lee",
      categories: [Categories.aduls, Categories.children],
      published_date: new Date(2021, 4, 3),
      price: 12.99,
      amount: 4,
      numOfRaitings: 10,
      sumOfRaitings: 5
    },
    {
      id: 3,
      nameb: "1984",
      author: "George Orwell",
      categories: [Categories.aduls],
      published_date: new Date(2021, 4, 3),
      price: 14.99,
      amount: 4,
      numOfRaitings: 5,
      sumOfRaitings: 14
    },
    {
      id: 4,
      nameb: "Pride and Prejudice",
      author: "Jane Austen",
      categories: [Categories.aduls, Categories.children],
      published_date: new Date(2021, 4, 3),
      price: 9.99,
      discount: 5,
      amount: 2,
      numOfRaitings: 2,
      sumOfRaitings: 2
    },
    {
      id: 5,
      nameb: "The Catcher in the Rye",
      author: "J.D. Salinger",
      categories: [Categories.aduls, Categories.children],
      published_date: new Date(2021, 4, 3),
      price: 11.99,
      discount: 20,
      amount: 0,
      numOfRaitings: 6,
      sumOfRaitings: 30
    },
    {
      id: 6,
      nameb: "The Hobbit",
      author: "J.R.R. Tolkien",
      categories: [Categories.aduls],
      published_date: new Date(2021, 4, 3),
      price: 15.99,
      discount: 0,
      amount: 5,
      numOfRaitings: 10,
      sumOfRaitings: 15
    },
    {
      id: 7,
      nameb: "Fahrenheit 451",
      author: "Ray Bradbury",
      categories: [Categories.children, Categories.babies],
      published_date: new Date(2021, 4, 3),
      price: 13.99,
      discount: 25,
      amount: 3,
      numOfRaitings: 3,
      sumOfRaitings: 4
    },
    {
      id: 8,
      nameb: "Brave New World",
      author: "Aldous Huxley",
      categories: [Categories.aduls],
      published_date: new Date(2021, 4, 3),
      price: 16.99,
      amount: 1,
      numOfRaitings: 10,
      sumOfRaitings: 10
    }
  ]);
const maxRating = (books) => {
  const sortedBooks = [...books].sort((a, b) => {
    const avgA = a.numOfRaitings ? a.sumOfRaitings / a.numOfRaitings : 0;
    const avgB = b.numOfRaitings ? b.sumOfRaitings / b.numOfRaitings : 0;
    return avgB - avgA; // יורד: הכי גבוה למעלה
  });

  return sortedBooks.slice(0, 3);
};
const top3Books = maxRating(books); // בתוך הפונקציה הראשית של הקומפוננטה


  // הגדלת כמות
  const increaseAmount = (id) => {
    setBooks(prev =>
      prev.map(book =>
        book.id === id ? { ...book, amount: book.amount + 1 } : book
      )
    );
  };

  // מחיקת ספר
  const deleteBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  // הוספת ספר חדש
  const addBook = (newBook) => {
    setBooks(prev => [
      ...prev,
      { ...newBook, id: prev.length ? prev[prev.length - 1].id + 1 : 1 }
    ]);
  };

  // חושפים את addBook החוצה דרך ref
  useImperativeHandle(ref, () => ({
    addBook
  }));

  return (
    <div className="books-container">
          <h2>📚 Top 3 Rated Books</h2>
    {top3Books.map((book) => (
      <Book
        key={book.id}
        {...book}
        onIncreaseAmount={increaseAmount}
        onDelete={deleteBook}
      />
    ))}
      {books.map((book) => (
        <Book
          key={book.id}
          {...book}
          onIncreaseAmount={increaseAmount}
          onDelete={deleteBook}
        />
      ))}
    </div>
  );
});

export default BookList;
