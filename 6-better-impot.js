
// better import nav-bar
// SSR: server side rendering
// moved index.html into public with its assets
// note index.html in public is root and loaded with everything it needs on start
const express = require('express')
const app = express()

app.use(express.static('./public'))

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,() =>{
    console.log('Listening to port 5000...')
})


/**
     * API - json     SSR-  template
     * Send data    send template
     * Res.JSON()   RES.Render()
     * Server provide data for API
 */