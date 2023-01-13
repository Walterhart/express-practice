// middleware
// express core has middleware
// function that excute when request to server
// each middleware has access to res and req objects

const express = require('express')
const app = express()

// req -> middleware -> res

// middleware
// Express pass req,res
// must pass to next middleware or send own response
const logger = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
     //res.send('testing')
    // pass to next middleware
    next()
}
  // middleware function is logger
app.get('/',  logger, (req,res) => {

    res.send('Home')
})

// can invoke more than once
app.get('/about', logger, (req,res) => {
    res.send('About')
})

app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})
