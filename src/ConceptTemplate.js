import React from 'react';
import { AnimatedBlocks } from './AnimatedBlocks.js';
import Router from './Router';
import { Header } from './HeaderTemplate.js';
import Denom from './math-denom/Denom';
import { Map } from './Map.js';
import Home from './home-posts/Home';

import './ConceptContent.css';

export const Concept = (props) => {
  const { content } = props;
  return (
<div className="Concept">
{/* Content */}
  <div id="content-wrapper">
    <Header/>
    <div id="content-left-border"></div>

    <div id="actual-content-container">
      <div id="actual-content">
        <Router posts={content}/>
      </div>
    </div>

  </div>

  <AnimatedBlocks/>
</div>
  );
}
