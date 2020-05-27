import React, { Component } from 'react'

// View Components
import BoxView from '../views/boxview'
import LongView from '../views/longview'
import Pagination from './pagination'

// Styles
import '../../sass/app.scss';

export default class Listings extends Component {
    /*
      Listings Component: This our component to display our listings.

      Props:
      1. listingsData Json file (either remote or local) that has our listings information
      2. change: This method is used to manipulate the state.
      3. globalState: Passes the entire state to the component
      4. cchangeView: This props is used to change how we change the viewå
    */

    constructor(props) {
        super(props)

        this.loopListings = this.loopListings.bind(this)
    }

    loopListings() {
      /*
        Generate our listings data
      */

        var {listingsData, users} = this.props

        if(listingsData == undefined || listingsData.length == 0) {
            return "Sorry your filter did not match any listing";
          }
      
          if(this.props.globalState.view == 'box') { // Box view
            return (
              <BoxView listingsData = {listingsData} users = {users}/>
            )
          } else { // Long view
            return (
              <LongView listingsData = {listingsData} users = {users}/>
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
  
            <Pagination />
          </section>
      )
    }
}
