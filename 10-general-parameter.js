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

// generalize selection
// parameter is stored into a variable and compared
app.get('/api/products/:productID', (req,res) => {
       
    // console.log(req)
    //  console.log(req.params)
    // naming matters!
    const {productID} = req.params

    // ids for this one is numbers not string
    const singleProduct = products.find((product) => product.id === Number(productID))

    // check if product does not exist/undefined
    if(!singleProduct){
        return res.status(404).send('Product does not exist')
    }

    return res.json(singleProduct)

})

//  complex parameter
// note: is hardcoed for reviews
// app.get('/api/products/:productID/reviews/:reviewID', (req,res) =>{
//     console.log('complex parameter')
// })

app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})