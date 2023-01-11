
// install: npm install express --save
// 2 methods to invoke
/*
 const app =reuire('express)();
 const app = express()
*/
const express = require('express')
const app = express()

// callback invoke users perform get request
app.get('/',(req,res)=>{
    console.log(`User requested:  ${req.method} at ${req.url} `)
    res.status(200).send('home page')

})

app.get('/about',(req,res)=>{
    console.log(`User requested:  ${req.method} at ${req.url} `)
    res.status(200).send('about the site')

})

// app.all: covers all 
app.all('*',(req,res)=>{
    console.log(`User requested:  ${req.method} at ${req.url} `)
    res.status(404).send('<h1>Error 404<h1>')

})

// app.listen 
// simlar to port
app.listen(5000,() =>{
    console.log('Listening to port 5000...')

})

// app.post
// app.put
// app.delete
// app.use
