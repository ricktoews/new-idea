import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Decimal } from './DecimalCalc.js';

const Home = () => <div></div>
const USMap = () => <div><h1>US Map</h1></div>

export const SiteNav = () => (
    <HashRouter>
      <div>
      <Route path="/" component={Home}></Route>
      <Route path="/decimals" component={Decimal}></Route>
      <Route path="/usmap" component={USMap}></Route>
      </div>
    </HashRouter>
);

