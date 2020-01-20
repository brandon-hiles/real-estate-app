import React from 'react'

// Public components
import Header from './public/Header.js'
import Filter from './public/Filter.js'
import Listings from './public/Listings.js'

// Data Components
import listingsData from './data/listingsData.js'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingsData,
            city: 'All',
            homeType: 'All',
            bedrooms: '0',
            min_price: 0,
            max_price: 1000000,
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
        this.change = this.changeView.bind(this)
        this.filteredData = this.filteredData.bind(this)
        this.populateForms = this.populateForms = this.populateForms.bind(this)
        this.getUniqueElements = this.getUniqueElements.bind(this)
    }

    componentWillMount() {
        // Personal Note: This lifecycle method is deprecated and will need to be replaced before launching site.

        var listingsData = this.state.listingsData.sort((a,b) => {
            return a.price = b.price
        })

        this.setState({
            listingsData
        })
    }

    change(event) {
        // State Modification Function: Used to displayed filtered data

        let name = event.target.name;
        let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        
        this.setState({
            [name]: value },
            () => {
                console.log(this.state)
                this.filteredData()
        })
    }



    render() {
        return(
            <div> Test div </div>
        )
    }
}