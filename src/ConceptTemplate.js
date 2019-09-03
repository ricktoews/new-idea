import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import { AnimatedBlocks } from './AnimatedBlocks.js';
import { Header } from './HeaderTemplate.js';
import { Home } from './Home.js';
import { Decimal } from './DecimalCalc.js';
import { Map } from './Map.js';
import { Shelf } from './Shelf.js';

import './ConceptContent.css';

export const Concept = () => (
<div className="Concept">
{/* Content */}
  <div id="content-wrapper">
    <Header/>
    <div id="content-left-border"></div>

    <div id="actual-content-container">
      <div id="actual-content">
        <Switch>
          <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/decimals" component={Decimal}></Route>
          <Route path="/usmap" component={Map}></Route>
          <Route path="/shelf" component={Shelf}></Route>
          </div>
        </Switch>
      </div>
    </div>

  </div>

  <AnimatedBlocks/>
</div>
)
