// Post  
// Postman : test APIs, dont need a frontend :D!
//          To test post go to body and set text->json 


/*
    Example of body in postman
    {
    "name": "john"
    }
*/

const express = require('express')
const app = express()
const {people} = require('./data')


// static assets
app.use(express.static('./methods-public'))

// Need middleware to access data
// parse form data
// allow parse url-encoded data with querystring when false or qs library when true
app.use(express.urlencoded({extended: false}))

// parse json data
// middleware that handle parse
app.use(express.json())

// simple get 
// user request url 
// server sends status and data
app.get('/api/people', (req,res) =>{
    res.status(200).json({success:true, data:people})
})

// handle get from axois for js form
// need to send content-type but axois handle it
app.post('/api/people', (req,res) =>{
    const {name} = req.body
    if(!name){
        return res
            .status(400).
            json({success:false, msg:'Please provide name value'})
    }
    res.status(201).json({sucess:true, person:name})
})

// example for postman
// database handle id
app.post('/api/postman/people', (req,res) =>{
    const {name} = req.body
    if(!name){
        return res
            .status(400).
            json({success:false, msg:'Please provide name value'})
    }
    res.status(201).json({sucess:true, data: [...people, name]})
    console.log(name)
    console.log(people)

})

// simple post
// no accesss and can add to list
// inorder to add to list we need middleware
// need body!
app.post('/Login', (req,res) => {
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
    console.log(req.body)

})

app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})


