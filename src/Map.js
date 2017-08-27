import React, { Component } from 'react';
import { Raphael } from 'react-raphael';
import { us } from './assets/js/us_data.js';

function mouseOverState() {
    this.animate({
        fill: 'blue'
    }, 500);
}

function mouseOutState() {
    this.animate({
        fill: '#ccc'
    }, 500);
}

function initMap() {
    var paper = Raphael('map-container');

    paper.setStart();
    for (var state in us) {
        paper.path(us[state].path)
            .attr({stroke: 'white', fill: '#ccc', 'stroke-opacity': 0.5})
            .data('abbr', state)
            .data('name', us[state].name)
            .data('capital', us[state].capital)
            .mouseover(mouseOverState)
            .mouseout(mouseOutState);
    }
    var us_map = paper.setFinish();
    us_map.scale('.5, .5, 0, 0');

}

export class Map extends Component {
    componentDidMount() {
        initMap();
    }

    render() {
        return (
      <div>
	    <h3>U.S. Map</h3>
        <div id="map-container"></div>
      </div>
	);
    }
}
