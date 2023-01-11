
// import nav-bar
const express = require('express')
const path = require('path')
const app = express()

// add a folder called public in project
// copy and move resource file for nav-bar into public


// setup static and middleware
// static is a file that server do not have to change
// allow use of directory resource
// express set path 
app.use(express.static('./public'))

app.get('/', (req, res)=>{
    console.log(`User requested:  ${req.method} at ${req.url} `)
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

// app.all: covers all 
app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,() =>{
    console.log('Listening to port 5000...')
})
