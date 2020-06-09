import React, { Component} from 'react';

import '../../sass/app.scss';

export default class Header extends Component {
  /*
  Header Component: This is a dummy component that displays our Header information.

  No Props are included with this component.
  */

  render () {
    return (
        <header id="loggedout_header">
          <div className="logo"> Cedar Property Adivsors </div>

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
