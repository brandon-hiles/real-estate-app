import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon',
    }
  }

  render () {
    return (
      <section id="filter">
        <div className="inside">
          <h4> Filter </h4>

          <select name="neighbourhood" className="filters neighbourhood" onChange={this.props.change}>
            <option value="Ridgewood"> Ridgewood </option>
            <option value="Miami"> Miami </option>
          </select>
          <select name="houseType" className="filters housetype" onChange={this.props.change}>
            <option value="Ranch"> Ranch </option>
            <option value="Apartment"> Apartment</option>
            <option value="Studio">Studio</option>
            <option value="Room">Room</option>
          </select>
          <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
            <option value="1"> 1 BR </option>
            <option value="2"> 2 BR </option>
            <option value="3"> 3 BR </option>
            <option value="4"> 4 BR </option>
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
