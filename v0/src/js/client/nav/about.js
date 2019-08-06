import React, {Component} from 'react';

export default class About extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon',
    }
  }

  render() {
    return (
      <h1> About Us Page </h1>
    )
  }
}
