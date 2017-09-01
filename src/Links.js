import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

export const NavLinks = () => (
  <HashRouter>
    <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/decimals">Decimal Calculator</Link></li>
      <li><Link to="/usmap">US States</Link></li>
      <li><Link to="/shelf">Bookshelf</Link></li>
    </ul>
    </nav>
  </HashRouter>
);
