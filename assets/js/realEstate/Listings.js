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
        <section id="listings">
          <section className="search-area">
            <input type="text" name="search" />
          </section>

          <section className="sortby-area">
            <div className="results"> 390 results found </div>
            <div className="sort-options">
              <select name="sortby" className="sortby">
                <option value="price-asc"> Highest Price </option>
                <option value="price-dsc"> Lowest Price </option>
              </select>
              <div className="view">
                <i className="fa fa-th-list" aria-hidden="true"></i>
                <i className="fa fa-th" aria-hidden="true"></i>
                </div>
            </div>
          </section>

          <section className="listings-results">
            <div className="col-md-3">
              <div className="listing">
                <div className="listing-img">
                  <span className="address"> 420 High Wood Falls </span>
                  <div className="details">
                    <div className="col-md-3">
                      <div className="user-img"></div>
                    </div>
                    <div className="col-md-9">
                      <div className="user-details">
                        <span className="user-name"> Nina Smith </span>
                        <span className="post-date"> 05/05/2017</span>
                      </div>
                      <div className="listing-details">
                        <div className="floor-space">
                        <i className="fa fa-square-o" aria-hidden="true"></i> <span>1000ft&sup2;</span>
                        </div>
                        <div className="bedrooms">
                          <i className="fa fa-bed" aria-hidden="true"></i>
                          <span>3 bedrooms</span>
                        </div>
                      </div>

                      <div className="view-btn">
                        View Listing
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bottom-info">
                  <span className="price"> $1000 / month </span>
                  <span className="location"> <i className="fa fa-map-marker" aria-hidden="true"></i> RidgeWood, NY </span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="listing">
                <div className="listing-img">
                  <span className="address"> 420 High Wood Falls </span>
                  <div className="details">
                    <div className="col-md-3">
                      <div className="user-img"></div>
                    </div>
                    <div className="col-md-9">
                      <div className="user-details">
                        <span className="user-name"> Nina Smith </span>
                        <span className="post-date"> 05/05/2017</span>
                      </div>
                      <div className="listing-details">
                        <div className="floor-space">
                        <i className="fa fa-square-o" aria-hidden="true"></i> <span>1000ft&sup2;</span>
                        </div>
                        <div className="bedrooms">
                          <i className="fa fa-bed" aria-hidden="true"></i>
                          <span>3 bedrooms</span>
                        </div>
                      </div>

                      <div className="view-btn">
                        View Listing
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bottom-info">
                  <span className="price"> $1000 / month </span>
                  <span className="location"> <i className="fa fa-map-marker" aria-hidden="true"></i> RidgeWood, NY </span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="listing">
                <div className="listing-img">
                  <span className="address"> 420 High Wood Falls </span>
                  <div className="details">
                    <div className="col-md-3">
                      <div className="user-img"></div>
                    </div>
                    <div className="col-md-9">
                      <div className="user-details">
                        <span className="user-name"> Nina Smith </span>
                        <span className="post-date"> 05/05/2017</span>
                      </div>
                      <div className="listing-details">
                        <div className="floor-space">
                        <i className="fa fa-square-o" aria-hidden="true"></i> <span>1000ft&sup2;</span>
                        </div>
                        <div className="bedrooms">
                          <i className="fa fa-bed" aria-hidden="true"></i>
                          <span>3 bedrooms</span>
                        </div>
                      </div>

                      <div className="view-btn">
                        View Listing
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bottom-info">
                  <span className="price"> $1000 / month </span>
                  <span className="location"> <i className="fa fa-map-marker" aria-hidden="true"></i> RidgeWood, NY </span>
                </div>
              </div>
            </div>
          </section>

          <section id="pagination">
            <ul className="pages">
              <li>Prev</li>
              <li className="active">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>Next</li>
            </ul>
          </section>


        </section>
    )
  }
}
