import React, { Component } from 'react'

const axios = require('axios');

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prev: false,
            next: true,
            current: "1",
            listingsData: []
        }
        this.paritionData = this.paritionData.bind(this)
    }

    componentDidMount() {
        const NUMBER = '24'; // Number of files we want to test
        const URI = 'https://stupefied-mccarthy-ecaf46.netlify.app/.netlify/functions/api/data/'; // API Endpoint

        //const HOME_URL = URI + 'housing/' + NUMBER;
        const HOME_URL = URI + 'housing';
        axios.get(HOME_URL).then(res => {
            console.log(res.data)  
            let data = this.paritionData(res.data)
            this.setState({
              listingsData: data
            })
          })
    }

    paritionData(data) {
        /*
        Problem: Accessing listingsData variable in the state.
        */
        let filterData = []
        let indexArr = [...Array(Math.round(data.length/12)).keys()].map(x => ++x) // Generate an array of 1 to N/12

      for (let i = 0; i < indexArr.length; i++) {
        filterData.push(data.slice(i*12,i*12+12))
      }

        return filterData
    }

    render() {
        return(
            <section id="pagination">
              <div className="row">
                <ul className="pages">
                  <li>Prev</li>
                  {/* Auto-generate these numbers */}
                  <li className="active">1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>Next</li>
                </ul>
              </div>
            </section>
        )
    }
}