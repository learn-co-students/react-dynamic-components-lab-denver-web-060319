import React, { Component } from 'react';
import { throws } from 'assert';

export default class ColorBox extends Component {
  
  render() {
      if (this.props.opacity >= 0.2){  
        return(
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>)
      }else return (null)}
      
  
}

