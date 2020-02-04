import express from 'express';
import morgan from 'morgan';

import receiptRouter from './routes/receipt'
import productRouter from './routes/product'
import Database from './config/database'
const app = express();


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// connection to db
Database

app.get('/', (req, res) => {
  res.json({message: "it works"})
})

app.use('/api/v1', receiptRouter)
app.use('/api/v1', productRouter)
// handle all routes
app.get("*", function(req, res) {
  res.json({message: "Routes not available"});
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    errors: {
      message: err.message
    }
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("App listening on PORT 3000")
})
