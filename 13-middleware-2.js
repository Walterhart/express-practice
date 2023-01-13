// middleware
// express core has middleware
// function that excute when request to server
// each middleware has access to res and req objects

const express = require('express')
const app = express()
const logger = require('./logger')

// req -> middleware -> res



// middleware
// invoke for any route
// orders matter!
// will be used on any methods after use, not before
app.use(logger)


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
    res.send('items')
})


app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})