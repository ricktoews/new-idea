import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Switch, Route } from 'react-router-dom';
import Home from './home-posts/Home';
import Denom from './math-denom/Denom';

function Router(props) {
  const { posts } = props;

  return (
      <div id="router">
        <MediaQuery query="(max-width:4096px) and (min-width:481px)">
          <Switch>
            <Route exact path='/' render={props => <Home posts={posts} />}/>
            <Route exact path='/denom' component={Denom}/>
            <Route path='/denom/:denom' component={Denom}/>
          </Switch>
        </MediaQuery>

        <MediaQuery query="(max-width:480px)">
          <Switch>
            <Route exact path='/' render={props => <Home posts={posts} />}/>
            <Route exact path='/denom' component={Denom}/>
            <Route path='/denom/:denom' component={Denom}/>
          </Switch>
        </MediaQuery>
      </div>
  );
}

export default Router;
