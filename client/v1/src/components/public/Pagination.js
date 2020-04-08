import React, { Component } from 'react'

const axios = require('axios');

export default class Pagination extends Component {
    constructor() {
        super()
        this.state = {
            prev: false,
            next: true,
            current: "1",
        }
        this.paritionData = this.paritionData.bind(this)
    }

    componentDidMount() {
        const NUMBER = '24'; // Number of files we want to test
        const URI = 'https://stupefied-mccarthy-ecaf46.netlify.com/.netlify/functions/api/data/'; // API Endpoint

        const HOME_URL = URI + 'housing/' + NUMBER;
        axios.get(HOME_URL).then(res => {
            this.setState({
              listingsData: res.data
            })
          })
    }

    paritionData(data) {
        /*
        Problem: Accessing listingsData variable in the state.
        */
        let filter = []
        let indexArr = [...Array(data.length/12).keys().mas(x =>++x)] // Generate an array of 1 to N/12
        console.log(indexArr)
    }

    render() {
        return(
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
                  {this.paritionData(this.state.listingsData)}
                </ul>
              </div>
            </section>
        )
    }
}