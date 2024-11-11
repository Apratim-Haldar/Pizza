import React from 'react';
import { Link } from 'react-router-dom';
import 'Navbar.css';

const Navbar = ({ cartCount, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Pizza Shop</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/orders" className="navbar-link">Orders</Link>
          </li>
          <li className="navbar-item">
            <span className="navbar-link">Cart: {cartCount}</span>
          </li>
          <li className="navbar-item">
            <button onClick={onLogout} className="navbar-link">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;