// 3rd party libaries
import React from 'react';
import axios from 'axios';

// Public components
import Header from './public/header.js'
import Filter from './public/filter.js'
import Listings from './public/listings.js'

// Utils
import getUniqueElements from './utils/uniqueElements'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // Data stored via external API Calls
            listingsData: [],
            users: [],
            filteredData: [],
            // Filter State variables
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
          // Pagination state variables
            current: 1
        }

        // Filter Functions
        this.change = this.change.bind(this)
        this.filteredData = this.filteredData.bind(this)
        this.changeView = this.changeView.bind(this)

        // Pagination Functions
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.pageParition = this.pageParition.bind(this)
        this.selectPage = this.selectPage.bind(this)
    }

    // Grab our Data via API GET Calls
    componentDidMount() {
        const URI = 'https://stupefied-mccarthy-ecaf46.netlify.app/.netlify/functions/api/data/'; // API Endpoint

        const HOME_URL = URI + 'housing/';
        const USER_URL = URI + 'users/';
        axios.get(HOME_URL).then(res => {
          let data = this.pageParition(res.data)
          let flatData = data.flat()

          let cities = getUniqueElements(flatData, "city")
          let homeTypes = getUniqueElements(flatData, "homeType")
          let bedrooms = getUniqueElements(flatData, "room")

          this.setState({
             listingsData: data,
             filteredData: data,
             populateFormsData: {
              homeTypes,
              bedrooms,
              cities
            }
           })
         })
         axios.get(USER_URL).then(res => {
           let data = this.pageParition(res.data)
           this.setState({
            users: data
           })
         })
       }


       change(event) {
        let name = event.target.name;
        let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    
        this.setState({
          [name]: value
        }, () => {
          this.filteredData()
        })
      }   

      changeView(view) {
        this.setState({
          view: view
        })
      }

      filteredData() {
        // Find a different way around newData for updating our state of filtered data. (02/13/2020)
        var newData = this.state.listingsdData[this.state.current].filter((item) => {
          let priceCondition = item.price >= this.state.min_price && item.price <= this.state.max_price;
          let floorCondition = item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space
          let bedRoomCondition = item.rooms >= this.state.bedrooms
          return priceCondition && floorCondition && bedRoomCondition;
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

      /* Pagination functions */
      pageParition(data) {
        let filterData = []
        let indexArr = [...Array(Math.round(data.length/12)).keys()].map(x => ++x) // Generate an array of 1 to N/12

        for (let i = 0; i < indexArr.length; i++) {
           filterData.push(data.slice(i*12,i*12+12))
        }

        return filterData
      }

      previous() {
        if (this.state.current !== 1 && this.state.current > 0) {
          // We shouldn't be allowed to go before the first page
          this.setState({
            current: this.state.current - 1
          })
        }
      }

      next() {
        if (this.state.current < this.state.listingsData.length) {
          this.setState({
            current: this.state.current + 1
          })
        }
      }

      selectPage(pageId) {
        this.setState({
          current: pageId
        })
      }
      render() {
        let data = this.state.listingsData
        let arr = [...Array(data.length).keys()].map(x => ++x)


        return(
          <div>
            <Header />
             <section id="content-area">
                <Filter change={this.change} globalState={this.state} />     
                 <Listings listingsData={this.state.listingsData} users={this.state.users} change={this.change} globalState={this.state} changeView = {this.changeView} current={this.state.current-1} previous={this.previous}/>
               <section id="pagination">
                 <div className="row">
                   <ul className="pages">
                     <li id="prev" onClick = {this.previous}>Prev</li>
                     {arr.map((val) => {
                       if (val == this.state.current) {
                         return (<li key={val} className="active" onClick={e => this.selectPage(e.target.id)}> {val} </li>)
                       } else {
                         return(<li key={val} id= {val} onClick={e => this.selectPage(e.target.id)}> {val} </li>)
                       }
                     })} 
                     <li id="next" onClick = {this.next}> Next</li>
                   </ul>
                 </div>
               </section>
              </section>
           </div>
           ) 
      }
  
}