import React, { Component } from 'react'

export default class BoxView extends Component {
  constructor() {
    super()
    this.view = this.view.bind(this)
  }

  view() {
    var {listingsData} = this.props

    if(listingsData == undefined || listingsData.length == 0) {
      return "Sorry your filter did not match any listing"
    }

    return listingsData.map((listing, index) => {
      let priceString = listing.price.toString()
      if (priceString.length === 5) {
        priceString = priceString.slice(0,2) + ',' + priceString.slice(2,5)
      }
      if (priceString.length === 6) {
        priceString = priceString.slice(0,3) + ',' + priceString.slice(3,6)
      }
      return ( <div className="col-md-3" key={index}>
            <div className="listing">
              <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
                <span className="address"> {listing.address} </span>
                <div className="details">
                  <div className="col-md-3">
                    {/* Use a face generator for this section */}
                    <div className="user-img"></div>
                  </div>
                  <div className="col-md-9">
                    <div className="user-details">
                      {/* Use Username generator and date generator for dynamic data here  */}
                      <span className="user-name"> Nina Smith </span>
                      <span className="post-date"> 05/05/2017</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                      <i className="fa fa-square-o" aria-hidden="true"></i> <span>{listing.floorSpace}ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span>{listing.rooms} bedrooms</span>
                      </div>
                    </div>

                    <div className="view-btn">
                      View Listing
                    </div>
                  </div>
                </div>
              </div>

              <div className="bottom-info">
                <span className="price"> ${priceString} </span>
                <span className="location"> <i className="fa fa-map-marker" aria-hidden="true"></i> {listing.city}, {listing.state} </span>
              </div>
            </div>
          </div>)
    })
  }

  render() {
    return (
      <section className="listings-results">
        {this.view()}
      </section>
      )
  }
}
