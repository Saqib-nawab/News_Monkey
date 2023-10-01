import React, { Component } from 'react'
import gif from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={gif} alt="loading" />
      </div>
    )
  }
}

export default Spinner
