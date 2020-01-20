import React, { Component } from 'react'

// View Components
import BoxView from './views/BoxView'
import LongView from './views/LongView'

export default class Listings extends Component {
    compoennt(props) {
        super(props)

        this.loopListings = this.loopListings.bind(this)
    }

    loopListings() {
        
        var {listingsData} = this.props

        if(listingsData == undefined || listingsData.length == 0) {
            return "Sorry your filter did not match any listing";
          }
      
          if(this.props.globalState.view == 'box') { // Box view
            return (
              <BoxView listingsData = {listingsData}/>
            )
          } else { // Long view
            return (
              <LongView listingsData = {listingsData} />
              )
          }
    }
}