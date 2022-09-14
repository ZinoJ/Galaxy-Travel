import React, { Component } from 'react'
import './HeroImage.css'

export class HeroImage extends Component {
  render() {
    return (
      <div className='hero-image'>
          <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
      </div>
    )
  }
}

export default HeroImage