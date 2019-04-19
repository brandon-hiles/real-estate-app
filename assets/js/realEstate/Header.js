import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon',
    }
  }

  render () {
    return (
      <header>
        <div> Logo </div>

        <nav>
        <a href="#"> Create Ads </a>
        <a href="#"> About Us </a>
        <a href="#"> Login </a>
        <a href="#" className="register-btn"> Register </a>
        </nav>

      </header>
    )
  }
}
