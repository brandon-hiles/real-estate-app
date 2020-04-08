import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../../sass/app.scss';

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon',
    }
  }

  render () {
    return (
      <Router>
        <header id="loggedout_header">
          <div className="logo"> Cedar Property Adivsors </div>

          <nav>
            <Link to='/get-started'> Create Ads </Link>
            <Link to='/about-us'> About Us </Link>
            <Link to='/login'> Login </Link>
            <Link to='/register' className="register-btn"> Register </Link>
          </nav>
      </header>
      </Router>
    )
  }
}
