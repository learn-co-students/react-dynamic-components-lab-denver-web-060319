import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

    const op = this.props.opacity

    if (op >= .2) {
      return (
        <div className="color-box" style={{opacity: op}}>
          <ColorBox opacity={op - .1}/>
        </div>
      )
    } else {
      return null;
    }

  }

}
