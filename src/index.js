import express from 'express';
import Product from './models/product'
import Receipt from './models/receipt'

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.json({message: "it works"})
})

// handle all routes
app.get("*", function(req, res) {
  res.json({message: "Routes not available"});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("App listening on PORT 3000")
})
