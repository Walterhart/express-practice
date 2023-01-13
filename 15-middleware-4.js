
// use more than one middleware
// express core has middleware
// function that excute when request to server
// each middleware has access to res and req objects

const express = require('express')
const app = express()
const logger = require('./logger')
const authorize =require('./authorize')
const morgan = require('morgan')

// req -> middleware -> res

// 1) use vs route
//    You will still use middle in route
// 2) options - own / express / third party
//    Express has middleware
//    third party such as morgan


// 2)
// expecting a middleware
// express has build in middleware such as static
//note: static assets 
//app.use(express.static('./public'))

//shows how long it take for server to respond
app.use(morgan('tiny'))

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
// 1) pass 2 middleware 
app.get('/api/items', [authorize, logger],  (req,res) => {
    console.log(req.user)
    // example of access correctly http://localhost:5000/api/items?user=john
    res.send('items')
})

app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})

