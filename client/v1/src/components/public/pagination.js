import React, { Component } from 'react'

const axios = require('axios');

export default class Pagination extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      var {data, current} = this.props
      let arr = [...Array(data.length).keys()].map(x => ++x)
      return(
            <section id="pagination">
              <div className="row">
                <ul className="pages">
                  <li id="prev">Prev</li>
                  {arr.map((val) => {
                    if ({val} == current) {
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
