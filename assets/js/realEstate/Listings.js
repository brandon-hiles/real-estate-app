import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon',
    }
  }

  render () {
    return (
        <section className="listings">
          Listings
        </section>
    )
  }
}
