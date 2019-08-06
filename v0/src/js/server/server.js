const mongoose = require('mongoose');
let Model = require('./database/schema.js')

const server = '127.0.0.1' + ':27017'; // Server + Port
const database = 'real-estate'; // Database name

class Database {
  constructor() {
    this._connect()
    this.schema()
  }

  _connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }

  insert(address, city, state, rooms, price, floorSpace, extras, homeType, image) {
    let message = new Model({
      address: address,
      city: city,
      state: state,
      rooms: rooms,
      price: price,
      floorSpace: floorSpace,
      extras: extras,
      homeType: homeType,
      image: image
    })
  }
}
