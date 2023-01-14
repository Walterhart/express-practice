// routes setup
// 1) create folder called route
// 2) add people folder
// 3) use express.route
// 4) move all app method except for login and use into route folder people.js
// 5) change all names from app to route in people.js
// 6) move app.use(json file) to people.js
// 7) remove any methods uri that has api/people from people because already in use here, keep the anything after people


const express = require('express')
const app = express()

const people = require('./routes-for-22/people')
const auth = require('./routes-for-22/auth')

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


