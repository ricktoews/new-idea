import React from 'react';
import { Switch, Link } from 'react-router-dom';

export const NavLinks = () => (
  <Switch>
    <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/decimals">Decimal Calculator</Link></li>
      <li><Link to="/usmap">US States</Link></li>
    </ul>
    </nav>
  </Switch>
);
