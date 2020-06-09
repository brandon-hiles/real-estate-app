import React, { Component } from 'react'

// View Components
import BoxView from '../views/boxview'
import LongView from '../views/longview'
import Pagination from './pagination'

// Styles
import '../../sass/app.scss';

export default class Listings extends Component {
    /*
      Listings Component: This components purpose is to display our listings.

      Props:
      - listingsData -> listings data file (JSON format) gathered from backend services
      - users -> users data file (JSON format) gathered from external source.
      - change -> Function used to change the state based on if user clicks a checkbox.
      - globalState -> The state of APP Component.
      - changeView -> Function that changes the view attribute of App state.
      - current -> Returns the current page number.
    */

    constructor(props) {
        super(props)

        this.loopListings = this.loopListings.bind(this)
    }

    loopListings() {
      /*
        Generate our listings data
      */

        var {listingsData, users, current} = this.props

        if(listingsData == undefined || listingsData.length == 0) {
            return "Sorry your filter did not match any listing";
          }
      
          if(this.props.globalState.view == 'box') { // Box view
            return (
              <BoxView listingsData = {listingsData[current]} users = {users[current]}/>
            )
          } else { // Long view
            return (
              <LongView listingsData = {listingsData[current]} users = {users[current]}/>
              )
          }
    }

    render () {
      var {listingsData, current} = this.props

      return (
          <section id="listings">
            <section className="search-area">
              <input type="text" name="search" onChange={this.props.change}/>
            </section>
  
            <section className="sortby-area">
              <div className="results"> {this.props.globalState.listingsData.length} results found </div>
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
  
            <Pagination data={listingsData} current={current}/>
          </section>
      )
    }
}
