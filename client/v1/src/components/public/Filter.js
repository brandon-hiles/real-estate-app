import React, { Component } from 'react'

export default class Filter extends Component {
    constructor(props) {
        super(props)
      /*
        Props:
        1. change:
        2. globalState:
        3. populateAction:
      */

        // Method Binding
        this.cities = this.cities.bind(this)
        this.homeTypes = this.homeTypes.bind(this)
        this.bedrooms = this.bedrooms.bind(this)
    }

    componentWillMount() {
        this.props.populateAction()
    }

    cities() {
        if(this.props.globalState.populateFormsData.cities != undefined){
          var {cities} = this.props.globalState.populateFormsData // Selects city from populateFormsData
    
          return cities.map((item) => {
            return(
              <option key={item} value={item}> {item} </option>
            )}
          )
        }
      }
    
      homeTypes() {
        if(this.props.globalState.populateFormsData.homeTypes != undefined){
          var { homeTypes } = this.props.globalState.populateFormsData
    
          return homeTypes.map((item) => {
            return(
              <option key={item} value={item}> {item} </option>
            )
          })
        }
      }
    
      bedrooms() {
        if(this.props.globalState.populateFormsData.bedrooms != undefined) {
          var { bedrooms } = this.props.globalState.populateFormsData
    
          return bedrooms.map((item) => {
            return(
              <option key={item} value={item}> {item}+ BR </option>
            )
          })
        }
      }
    
      render () {
        return (
          <section id="filter">
            <div className="inside">
              <h4> Filter </h4>
    
              <label htmlFor="city"> <span className="header">City </span></label>
              <select name="city" className="filters city" onChange={this.props.change}>
              <option value="All"> All </option>
                {this.cities()}
              </select>
              <label htmlFor="hometype"><span className="header">Home Type </span></label>
              <select name="homeType" className="filters homeType" onChange={this.props.change}>
                <option value="All"> All Homes </option>
                {this.homeTypes()}
              </select>
              <label htmlFor="bedrooms"><span className="header">Bedrooms </span></label>
              <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
                {this.bedrooms()}
              </select>
    
              <div className="filters price">
                <span className="title"> Price </span>
                <input type="text" name="min_price" className="min-price" value={this.props.globalState.min_price} onChange={this.props.change}/>
                <input type="text" name="max_price" className="max-price" value={this.props.globalState.max_price} onChange={this.props.change}/>
              </div>
    
              <div className="filters floor-space">
                <span className="title"> Floor space </span>
                <input type="text" name="min_floor_space" className="min-floor-space" value={this.props.globalState.min_floor_space} onChange={this.props.change}/>
                <input type="text" name="max_floor_space" className="max-floor-space" value={this.props.globalState.max_floor_space} onChange={this.props.change}/>
              </div>
    
              <div className="filters extras">
              <span className="title"> Extras</span>
              <label htmlFor="extras">
                <span> Elevators </span>
                <input type="checkbox" value="elevator" name="elevator" onChange={this.props.change}/>
              </label>
              <label htmlFor="extras">
                <span> Swimming Pool </span>
                <input type="checkbox" value="swimming_pool" name="swimming_pool" onChange={this.props.change}/>
              </label>
              <label htmlFor="extras">
                <span> Finished Basement </span>
                <input type="checkbox" value="finished_basement" name="finished_basement" onChange={this.props.change}/>
              </label>
              <label htmlFor="extras">
                <span> Gym </span>
                <input type="checkbox" value="gym" name="gym" onChange={this.props.change}/>
              </label>
              </div>
            </div>
          </section>
        )
      }
}