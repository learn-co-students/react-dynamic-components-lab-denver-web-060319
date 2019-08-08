import React, { Component } from 'react';

export default class ColorBox extends Component {
  // V-------- MY SOLUTION --------V
  // example = (props) => {
  //   if (props >= .2) {
  //     props = props - .1
  //     return <div className="color-box" style={{opacity: props}}>{this.example(props)}</div>
  //   } else {
  //     return null
  //   }
  // }

  render() {
    return (
      // V-------- LEARN'S SOLUTION --------V
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>

      // V-------- MY SOLUTION --------V
      // console.log(this.props)
      // <div className="color-box" style={{opacity: this.props.opacity}}>
      //   {this.example(this.props.opacity)}
      // </div>
    )
  }
  
}
