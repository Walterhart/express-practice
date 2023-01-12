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

// query string 
app.get('/api/v1/query', (req,res) => {
    console.log(req.query)
    const {search, limit} = req.query

    // copy product
    let sortedProducts =[...products]
    console.log(sortedProducts)

    // check if search contain a vaule 
    // return searched product
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    // check if limit has value
    // return a certain amont of products base on limit
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }    
    // if search not found
    // inform user that search was success/failer
    if(sortedProducts.length <1){
        //res.statis(200).send('No product matched your search')
        //need return
        return res.status(200).json({success:true, data: []})
    }
    return res.status(200).json(sortedProducts)
})
app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})
// v1= version 1
// example of user search bar entry: 
//localhost:5000/api/v1/query?name=john&id=4
// ?dataName = dataValue
// to combine search use &
////localhost:5000/api/v1/query?search=a&limit=2
// search for product start with a  and limit is number of data returned