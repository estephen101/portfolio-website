const express = require('express')
const dotenv = require('dotenv').config()

const app = express(); // creates instance of the express app


// simple default route 
app.get('/',(req,res) =>{
    res.send('this endpoint is working properly')
})

const port = process.env.PORT || 3000

//starting the server
app.listen(port, console.log(`server is running on port ${port}`))