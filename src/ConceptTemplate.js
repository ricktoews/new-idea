import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { AnimatedBlocks } from './AnimatedBlocks.js';
import { Header } from './HeaderTemplate.js';

import { Decimal } from './DecimalCalc.js';

import './ConceptContent.css';
const Home = () => <div></div>
const USMap = () => <div><h1>US Map</h1></div>


export const Concept = () => (
<div className="Concept">
{/* Content */}
  <div id="content-wrapper">
    <Header/>
    <div id="content-left-border"></div>

    <div id="actual-content-container">
      <div id="actual-content">

        <HashRouter>
          <div>
          <Route path="/" component={Home}></Route>
          <Route path="/decimals" component={Decimal}></Route>
          <Route path="/usmap" component={USMap}></Route>
          </div>
        </HashRouter>

      </div>
    </div>

  </div>

  <AnimatedBlocks/>
</div>
)
