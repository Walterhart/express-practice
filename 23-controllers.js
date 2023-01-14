// controllers has all functions
// routes  invoke

const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))

// Need middleware to access data
// parse form data
// allow parse url-encoded data with querystring when false or qs library when true
app.use(express.urlencoded({extended: false}))

// parse json data
// middleware that handle parse
app.use(express.json())


// use people for all api/people
// base path
app.use('/api/people', people)
app.use('/login', auth )


app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})


