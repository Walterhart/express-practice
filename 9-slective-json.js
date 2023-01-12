const express = require('express')
const app = express()

// call data.js module 
// naming matters!
// have to be same name as in export
const {products} = require('./data.js')

app.get('/', (req,res) =>{
    res.send('<h1> Home Page</h1> <a href = "/api/products">Products</a>') 

})

// selective of what being sent back
// map json data and return 
app.get('/api/products', (req,res) => {
    const newProducts = products.map((product ) =>
    {
        
        const {id, name, image} = product;
        return {id , name , image}
    })
    res.json(newProducts)

})

// overkill
app.get('/api/products/1', (req,res) => {
    const newProducts = products.map((product) =>
    {
        const singleProduct = products.find((product => product.id === 1))
        res.json(singleProduct)
       
    })
    res.json(newProducts)

})

app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})