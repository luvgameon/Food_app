const express = require('express')
const app = express()
const port = 5000
const mongoDb= require("./db");
mongoDb();
const userroute=require('./routes/CreateUser');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/api',userroute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})