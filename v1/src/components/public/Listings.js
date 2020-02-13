import React, { Component } from 'react'

// View Components
import BoxView from '../views/BoxView'
import LongView from '../views/LongView'

// Styles
import '../../sass/app.scss';

export default class Listings extends Component {
    constructor(props) {
        super(props)

        this.loopListings = this.loopListings.bind(this)
    }

    loopListings() {
        
        var {listingsData} = this.props

        if(listingsData == undefined || listingsData.length == 0) {
            return "Sorry your filter did not match any listing";
          }
      
          if(this.props.globalState.view == 'box') { // Box view
            return (
              <BoxView listingsData = {listingsData}/>
            )
          } else { // Long view
            return (
              <LongView listingsData = {listingsData} />
              )
          }
    }

    render () {
      return (
          <section id="listings">
            <section className="search-area">
              <input type="text" name="search" onChange={this.props.change}/>
            </section>
  
            <section className="sortby-area">
              <div className="results"> {this.props.globalState.filteredData.length} results found </div>
              <div className="sort-options">
                <select name="sortby" className="sortby" onChange={this.props.change}>
                  <option value="price-dsc"> Lowest Price </option>
                  <option value="price-asc"> Highest Price </option>
                </select>
                <div className="view">
                  <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.changeView.bind(null, "long")}></i>
                  <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "box")}></i>
                  </div>
              </div>
            </section>
  
            <section className="listings-results">
              {this.loopListings()}
            </section>
  
            <section id="pagination">
              <div className="row">
                <ul className="pages">
                  <li>Prev</li>
                  <li className="active">1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>Next</li>
                </ul>
              </div>
            </section>
  
  
          </section>
      )
    }    
}