import React, { Component } from 'react';
import { pattern1 } from './data.js'
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map( val => <Cell value={val}/> ) 
    //vals.map(val => <div className="cell"></div>)
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: pattern1
}
