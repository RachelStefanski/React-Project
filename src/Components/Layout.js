// Layout.js
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>My Header</header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>My Footer</footer>
    </>
  );
}

export default Layout;
