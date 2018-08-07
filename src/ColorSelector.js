import React, { Component } from 'react';
// import Matrix, { setColor } from './Matrix.js'

export default class ColorSelector extends Component {

  // handleClick = (props) => {
  //   // console.log(props)
  //   setColor(props)
  // }

  makeColorSwatches = () => (
    // console.log(this.props)
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} onClick={() => {this.props.setColor(str)}} className="color-swatch" style={{backgroundColor: str}} />
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
