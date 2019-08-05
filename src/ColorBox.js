import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const { opacity } = this.props
    const newOpacity = (opacity - 0.1)
    if (opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: opacity}}>
            <ColorBox opacity={newOpacity} />
        </div>
      )    
    } else {
      return null
    }
  }
}
