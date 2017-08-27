import React from 'react';
import './ConceptDecoration.css';

export const AnimatedBlocks = () => (
<div className="blocks">
  <div id="block3" className="vertical-block"></div>
  <div id="block4" className="vertical-block"></div>
  <div id="block1" className="horiz-block">
    <div id="top-line-container">
      <div id="top-line"></div>
      <div id="top-line-circle"></div>
    </div>
  </div>
  <div id="block2" className="horiz-block">
    <div id="bottom-line-container">
      <div id="bottom-line"></div>
      <div id="bottom-line-circle"></div>
    </div>
  </div>
</div>
);
