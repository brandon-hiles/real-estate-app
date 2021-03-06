import React, { Component } from 'react'

export default class LongView extends Component {
  constructor(props) {
    super(props)
    this.view = this.view.bind(this);
  }

  view() {
    var {listingsData, users} = this.props

    if(listingsData == undefined || listingsData.length == 0) {
      return "Sorry your filter did not match any listing"
    }

    // Display Issue with this component
    return listingsData.map((listing, index) => {
        return (<div className="col-md-12 col-lg-6" key={index}>
          <div className="listing">
            <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
              <span className="address"> {listing.address} </span>
              <div className="details">
                <div className="user-info">
                  <div className="user-img" style={{background: `url("${users[index].image}") no-repeat center center`}}></div>
                  <div className="user-details-long">
                    <span className="user-name"> {users[index].name} </span>
                    <span className="post-date"> {users[index].date}</span>
                  </div>
                </div>
                <div className="listings-info">
                  <div className="listing-details">
                    <div className="floor-space">
                    <i className="fa fa-square-o" aria-hidden="true"></i> <span>{listing.floorSpace}ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>{listing.room} bedrooms</span>
                    </div>
                  </div>

                  <div className="view-btn">
                    View Listing
                  </div>
                </div>
              </div>
            </div>

          <div className="bottom-info">
            <span className="price"> ${listing.price} </span>
            <span className="location"> <i className="fa fa-map-marker" aria-hidden="true"></i> {listing.city}, {listing.state} </span>
          </div>
        </div>
      </div>)
    }
  )
}

  render() {
    return (
      <section className="listings-results">
        {this.view()}
      </section>
    )
  }

}
