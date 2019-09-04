import React, { useEffect } from 'react';
import { Switch, Link } from 'react-router-dom';
import './ConceptDecoration.css';

export const AnimatedBlocks = () => {
    useEffect(() => {
        document.getElementById('top-line-container').addEventListener('animationend', () => {
            console.log('animation ended.');
            document.getElementsByClassName('btn')[0].classList.remove('btn-hidden');
            document.getElementsByClassName('btn')[0].classList.add('btn-show');
        });
    });

    return (
      <div className="blocks">
        <div id="block3" className="vertical-block"></div>
        <div id="block4" className="vertical-block"></div>
        <div id="block1" className="horiz-block">
          <div id="top-line-container">
            <div id="top-line"></div>
            <div id="top-line-circle"></div>
          </div>
          <nav className="btn btn-hidden">
            <Link to="/">Home</Link>
            <Link to="/denom">Denominators</Link>
            <Link to="/usmap">Maps</Link>
          </nav>
        </div>
        <div id="block2" className="horiz-block">
          <div id="bottom-line-container">
            <div id="bottom-line"></div>
            <div id="bottom-line-circle"></div>
          </div>
        </div>
      </div>
    );
}
