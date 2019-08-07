import React, { Component } from 'react';
// import App from './App'

export default class ColorBox extends Component {
  render() {
    const opacityValue = this.props.opacity
    return ( 
      <div className="color-box" style={{opacity: 1}}>
        {opacityValue >= 0.2 ? <ColorBox opacity={opacityValue - 0.1} /> : null}
      </div>
    )
  }
  
}
