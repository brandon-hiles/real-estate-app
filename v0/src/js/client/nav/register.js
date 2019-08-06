import React, {Component} from 'react';

export default class Register extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon',
    }
  }

  render() {
    return (
      <h1> Register Page </h1>
    )
  }
}
