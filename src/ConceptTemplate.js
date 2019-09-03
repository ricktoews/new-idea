import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import { AnimatedBlocks } from './AnimatedBlocks.js';
import { Header } from './HeaderTemplate.js';
import { Decimal } from './DecimalCalc.js';
import { Map } from './Map.js';

import './ConceptContent.css';
const Home = () => <div></div>


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
          <Route path="/" component={Home}></Route>
          <Route path="/decimals" component={Decimal}></Route>
          <Route path="/usmap" component={Map}></Route>
          </div>
        </Switch>

      </div>
    </div>

  </div>

  <AnimatedBlocks/>
</div>
)
