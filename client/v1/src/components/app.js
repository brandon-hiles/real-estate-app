import React from 'react';

// Public components
import Header from './public/Header.js'
import Filter from './public/Filter.js'
import Listings from './public/Listings.js'

// Utils
import getUniqueElements from './utils/uniqueElements'

const axios = require('axios');

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // Used for Filter
            listingsData: [],
            users: [],
            filteredData: this.listingsData,
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
            populateFormsData: '',
            sortby: 'price-dsc',
            view: 'box',
            search: '',
          // Pagniation controls
            prev: false,
            next: false,
            current: "1"
        }

        // Main Functions
        this.change = this.change.bind(this)
        //this.filteredData = this.filteredData.bind(this)
        //this.populateForms = this.populateForms.bind(this)
        this.changeView = this.changeView.bind(this)
        this.paritionData = this.paritionData.bind(this)

        //this.newData = this.newData.bind(this)
    }

    // Define our component lifestyle methods
    componentDidMount() {
        const NUMBER = '24'; // Number of files we want to test
        const URI = 'https://stupefied-mccarthy-ecaf46.netlify.app/.netlify/functions/api/data/'; // API Endpoint

        const HOME_URL = URI + 'housing/' + NUMBER;
        const USER_URL = URI + 'users/' + NUMBER;
        axios.get(HOME_URL).then(res => {
          this.setState({
             listingsData: res.data
           })
         })
         axios.get(USER_URL).then(res => {
           this.setState({
            users: res.data
           })
         })
       }

       // Pagination Section:
       paritionData(data) {
        {/* Problem in BoxView Components */}
        let filterData = []
        let indexArr = [...Array(Math.round(data.length/12)).keys()].map(x => ++x) // Generate an array of 1 to N/12

      for (let i = 0; i < indexArr.length; i++) {
        filterData.push(data.slice(i*12,i*12+12))
      }

        return filterData
    }

       change(event) {
        let name = event.target.name;
        let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    
        this.setState({
          [name]: value
        }, () => {
          console.log(this.state)
          //this.filteredData()
        })
      }   

      changeView(view) {
        this.setState({
          view: view
        })
      }

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
              <Header />
                <section id="content-area">
                {/*<Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />*/}
                  <Listings listingsData={this.state.listingsData} users={this.state.users} change={this.change} globalState={this.state} changeView = {this.changeView}/>
                </section>
            </div>
        )
     }

}