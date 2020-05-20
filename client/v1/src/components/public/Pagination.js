import React, { Component } from 'react'

const axios = require('axios');

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
      let arr = [...Array(this.state.listingsData.length).keys()].map(x => ++x)
        return(
            <section id="pagination">
              <div className="row">
                <ul className="pages">
                  <li id="prev">Prev</li>
                  {arr.map((val) => {
                    if ({val} == this.state.current) {
                      return (<li key={val} className="active"> {val} </li>)
                    } else {
                      return(<li key={val} id= {val}> {val} </li>)
                    }
                  })} 
                  <li id="next">Next</li>
                </ul>
              </div>
            </section>
        )
    }
}