import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        <div className="logo"> Logo </div>

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
