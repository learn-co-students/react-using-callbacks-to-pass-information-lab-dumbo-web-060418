import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedColor: ""
    }
  }

  setColor = (colorFromSelector) => {
    console.log('== colorFromSelector', colorFromSelector)
    this.setState({ selectedColor: colorFromSelector });
  }

  clickHandler = (e) => {
    console.log('YAY', e.target.style.backgroundColor)
    e.target.style.backgroundColor = this.state.selectedColor
  }

  genRow = (vals) => {
    return vals.map((val, idx) => <Cell key={idx} color={val} clickHandler={this.clickHandler}/> )
  }

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector chooseColor={this.setColor}/>
        <div id="matrix" >
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
