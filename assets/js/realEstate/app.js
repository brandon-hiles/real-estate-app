import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon',
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
      populateFormsData: ''
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.getUniqueElements = this.getUniqueElements.bind(this)
  }

  change(event) {
    let name = event.target.name;
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  filteredData() {
    var newData = this.state.listingsData.filter((item) => {
      let priceCondition = item.price >= this.state.min_price && item.price <= this.state.max_price;
      let floorCondition = item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space
      return priceCondition && floorCondition && item.rooms >= this.state.bedrooms
    })

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

    this.setState({
      filteredData: newData
    })
  }

  getUniqueElements(property) {
    /*
    Helper Method: Returns an array of all unique elements in object specified
    by object property called property.

    Example: obj = {prop1: ["ex1", "ex2", "ex1"], prop2: ...}
    elms = getUniqueElements(prop1) -> ["ex1", "ex2"]
     */

    let list = this.state.listingsData.map((item) => {
      return item[property]
    })

    list = new Set(list) // Convert to set to get unique elements
    list = [...list] // Convert back to array
    return list
  }

  populateForms() {

     let cities = this.getUniqueElements("city")
     let homeTypes = this.getUniqueElements("homeType")
     let bedrooms = this.getUniqueElements("rooms")

    this.setState({
      populateFormsData: {
        homeTypes,
        bedrooms,
        cities
      }
    }, () => {
      console.log(this.state)
    })
  }

  render () {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
          <Listings listingsData={this.state.filteredData} />
        </section>
       </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
