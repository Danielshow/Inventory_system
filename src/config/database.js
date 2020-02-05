import mongoose from 'mongoose';

require('dotenv').config();

const server = process.env.server;
const database = process.env.database;

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
