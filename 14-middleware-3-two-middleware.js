// use more than one middleware
// express core has middleware
// function that excute when request to server
// each middleware has access to res and req objects

const express = require('express')
const app = express()
const logger = require('./logger')
const authorize =require('./authorize')

// req -> middleware -> res


// add path
// will apply to any route with /api  only
// use both middleware
// order matter!
// excuted
app.use([authorize, logger])

app.get('/',  (req,res) => {
    res.send('Home')
})

// can invoke more than once
app.get('/about', (req,res) => {
    res.send('About')
})
app.get('/products', (req,res) => {
    res.send('products')
})
app.get('/api/items',  (req,res) => {
    console.log(req.user)
    // example of access correctly http://localhost:5000/api/items?user=john
    res.send('items')
})

app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})

