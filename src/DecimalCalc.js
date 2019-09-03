import React, { Component } from 'react';
import { DC } from './decimal-calc-service';
import './DecimalCalc.css';

var decimalRESTUrl = 'http://arithmo-rest.toewsweb.net/dc/';
function decimalREST(denom) {
    var url = decimalRESTUrl + denom;
    return fetch(url)
               .then(res => res.json());
}

export class Decimal extends Component {
    constructor() {
        super()
		this.state = {
	    	decimalRows: []
		}
		this.getDecimalRows(13);
		this.handleDenomInput = this.handleDenomInput.bind(this);
		this.dc = new DC();
    }

    handleDenomInput(evt) {
        var val = evt.target.value;
		if (val < 2) return false;
		this.getDecimalRows(val);
    }

    getDecimalRows(denom) {
        decimalREST(denom)
	    .then(res => {
			res = this.dc.process(res);
	        this.setState({ decimalRows: res });
	    });
    }
    
    render() {
      
      return (
  <div>
    <h3>Decimal Calculator</h3>

    <input type="text" onChange={this.handleDenomInput}/>

    <table>
      <tbody>
      {this.state.decimalRows.map(row => (
      <tr key={row.num}>
        <td>{row.fraction}</td>
        <td>.<span className="decimal-part-0">{row.parts[0]}</span>
			<span className="decimal-part-1">{row.parts[1]}</span>
			<span className="decimal-part-2">{row.parts[2]}</span>
		</td>
      </tr>
      ))}
      </tbody>
    </table>
  </div>
    );
    }
}
