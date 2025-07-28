// components/Layout.jsx
import { Link, Outlet } from "react-router-dom";
// import "./Layout.css"; // אופציונלי – אם יש לך עיצוב ללייאאוט

function Layout() {
return (
<div className="App">
<header className="App-header">
<h1>My Bookstore</h1>
<p>Welcome! Find the Next Book You Want to Read</p>
</header>

  <nav className="navbar">
    <Link to="/">Books</Link>
    <Link to="/home">Home</Link>
    <Link to="/contact">Contact Us</Link>
  </nav>

  <div className="banner">
    📚 Summer Sale! 20% Off All New Books 📚
  </div>

  <main className="main-content">
    <Outlet />
  </main>
</div>
);
}

export default Layout;