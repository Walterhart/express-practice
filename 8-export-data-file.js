const express = require('express')
const app = express()

// call data.js module 
// naming matters!
// have to be same name as in export
const {products} = require('./data.js')

app.get('/', (req,res) =>{
    // send data
    res.json(products) 

})

app.all('*', () =>{
    
})

app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})