const mongoose = require('mongoose');

// move to env
const server = '127.0.0.1:27017';
const database = 'inventory';

class Database {
  constructor() {
    this.connect()
  }
  
  connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
    })
  }
}

module.exports = new Database()