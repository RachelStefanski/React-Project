import Book from './Components/Book.js';
import './App.css';
import BookList from './Components/BookList.js';

function App() {
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
        📚 Summer Sale! 20% Off All New Books📚
      </div>

      <div className="books-container">
        {BookList.map((book, index) => (<Book key={index} {...book} />))}
      </div>
    </div>
  );
}

export default App;
