import React, {Component} from 'react';

export default class Login extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon',
    }
  }

  render() {
    return (
      <h1> Login Page </h1>
    )
  }
}
