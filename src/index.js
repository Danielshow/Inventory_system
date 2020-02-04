import express from 'express';

import receiptRouter from './routes/receipt'
import productRouter from './routes/product'

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.json({message: "it works"})
})

app.use('/api/v1', receiptRouter)
app.use('/api/v1', productRouter)
// handle all routes
app.get("*", function(req, res) {
  res.json({message: "Routes not available"});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("App listening on PORT 3000")
})
