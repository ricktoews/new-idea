import React from 'react';
import './ConceptHeader.css';
import { SiteNav } from './SiteNav.js';
import { NavLinks } from './Links.js';

export const Header = () => (
  <div>
    <NavLinks/>
    <SiteNav/>
    <div id="content-top-border"></div>

  </div>
)
