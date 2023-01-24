
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/book-routes')
const colors = require('colors')
const port = process.env.PORT || 5000
const cors = require('cors')
require("dotenv").config();


//middlewares
app.use(express.json())
app.use(cors())
app.use("/books", router)





//DB connection and server configuration

mongoose.connect(process.env.CONNECTION_STRING)
.then( () => console.log('Connected To DB'.blue))
.then(() => app.listen(port, () => {
    console.log(`Example app listening on port ${port}`.cyan)
  }) )
  .catch((err) => console.log(err))



