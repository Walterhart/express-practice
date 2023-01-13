// Post  HTTP method
// Need a tool or a working app
// We have to send the body

const express = require('express')
const app = express()
const {people} = require('./data')


// static assets
app.use(express.static('./methods-public'))

// parse from data
// allow parse url-encoded data with querystring when false or qs library when true
app.use(express.urlencoded({extended: false}))


// simple get 
//user request url 
// server sends status and data
app.get('/api/people', (req,res) =>{
    res.status(200).json({success:true, data:people})
})

// simple post
// no accesss and can add to list
// inorder to add to list we need middleware
// need body!
app.post('/login', (req,res) => {
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


