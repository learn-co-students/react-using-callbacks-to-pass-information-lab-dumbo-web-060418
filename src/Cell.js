import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {

    let color = this.props.getSelectedColor()
    this.setState({
      color: color
    })
  }

  render() {

    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>

      </div>
    )
  }

}
