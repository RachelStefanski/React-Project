import './App.css';
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';
import { useState, useRef } from 'react';

function App() {
  const bookListRef = useRef(); // 💡 הוספנו!
  const [showAddBook, setShowAddBook] = useState(false);

  const handleAddBook = (book) => {
    bookListRef.current.addBook(book); // קורא לפונקציית BookList
    setShowAddBook(false); // סגירת הטופס
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Bookstore</h1>
        <p>Welcome! Find the Next Book You Want to Read</p>
      </header>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#contact">Contact Us</a>
      </nav>

      <div className="banner">
        📚 Summer Sale! 20% Off All New Books 📚
      </div>

      {/* רק פעם אחת! */}
      <BookList ref={bookListRef} />

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
        )}      </div>
    </div>
  );
}

export default App;
