import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">GLOWING</div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li>Shop</li>
          <li><Link to="/product">Product</Link></li>
          <li>Pages</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;