import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

// Public components
import Header from './public/Header.js'
import Filter from './public/Filter.js'
import Listings from './public/Listings.js'
import GetStarted from './public/GetStarted.js'

// Data Components
import listingsData from './data/listingsData.js'

// Utils
import getUniqueElements from './utils/uniqueElements'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingsData,
            city: 'All',
            homeType: 'All',
            bedrooms: '0',
            min_price: 0,
            max_price: 10000000,
            min_floor_space: 0,
            max_floor_space: 50000,
            elevator: false,
            finished_basement: false,
            gym: false,
            swimming_pool: false,
            filteredData: listingsData,
            populateFormsData: '',
            sortby: 'price-dsc',
            view: 'box',
            search: ''
        }

        // Main Functions
        this.change = this.change.bind(this)
        this.filteredData = this.filteredData.bind(this)
        this.populateForms = this.populateForms.bind(this)
        this.changeView = this.changeView.bind(this)

        this.newData = this.newData.bind(this)

       // this.checkBoxFilters = this.checkBoxFilters.bind(this)
      }
    
      componentWillMount() {
        var listingsData = this.state.listingsData.sort((a,b) => {
          return a.price - b.price
        })
    
        this.setState({
          listingsData
        })
      }
    
      change(event) {
        let name = event.target.name;
        let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    
        this.setState({
          [name]: value
        }, () => {
          //console.log(this.state)
          this.filteredData()
        })
      }
    
      changeView(view) {
        this.setState({
          view: view
        })
      }

      // checkBoxFilters(data, property) {
      //   if (this.state[property] == true) {
      //     data.filter((item) => {return item.extras[property] === true})
      //   }
      // }

      newData() {
        var newData = this.state.listingsData.filter((item) => {
          let priceCondition = item.price >= this.state.min_price && item.price <= this.state.max_price;
          let floorCondition = item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space
          let bedRoomCondition = item.rooms >= this.state.bedrooms
          return priceCondition && floorCondition && bedRoomCondition;
        })
        return newData
      }

      filteredData() {
        // Find a different way around newData for updating our state of filtered data. (02/13/2020)
        var newData = this.newData()
    
        if (this.state.city != "All") {
          newData = newData.filter((item) => {
            return item.city == this.state.city
          })
        }
    
        if (this.state.homeType != "All") {
          newData = newData.filter((item) => {
            return item.homeType == this.state.homeType
          })
        }
    
        if (this.state.sortby == "price-dsc") {
          newData = newData.sort((a,b) => {
            return a.price - b.price
          })
        }
    
        if (this.state.sortby == "price-asc") {
          newData = newData.sort((a,b) => {
            return b.price - a.price
          })
        }

        if (this.state.search != 'null') {
          newData = newData.filter((item) => {
            var city = item.city.toLowerCase()
            var searchText = this.state.search.toLowerCase()
            var n = city.match(searchText)
    
            if (n != null) {
              return true
            }
          })
        }
    
        if (this.state.elevator == true) {
          newData = newData.filter((item) => {
            return item.extras.elevator == true;
          })
        }

        if (this.state.swimming_pool == true) {
          newData = newData.filter((item) => {
            return item.extras.pool == true;
          })
        }
    
        if (this.state.finished_basement == true) {
          newData = newData.filter((item) => {
            return item.extras.finished_basement == true;
          })
        }
    
        if (this.state.gym == true) {
          newData = newData.filter((item) => {
            return item.extras.gym == true;
          })
        }
    
        this.setState({
          filteredData: newData
        })
      }
    
      populateForms() {
    
         let cities = getUniqueElements(this.state.listingsData, "city")
         let homeTypes = getUniqueElements(this.state.listingsData, "homeType")
         let bedrooms = getUniqueElements(this.state.listingsData, "rooms")
        this.setState({
          populateFormsData: {
            homeTypes,
            bedrooms,
            cities
          }
        })
      }


    render() {
        return(
            <div>
              <Router>
                {/* Small Routing Issues */ }
                <Route path="/get-started" component={() => <GetStarted/>} />
              </Router>
                <Header />
                <section id="content-area">
                    <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
                    <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView = {this.changeView}/>
                </section>
            </div>
        )
    }
}