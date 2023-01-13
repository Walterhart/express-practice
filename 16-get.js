// Get Read
//  Default in browser
// Post Insert Data - example adding order from a user
// Put Update Data
// Delete Delete Data
/*
Request message:
            method/url httpVersion       
                Headers: information about our message. Blackline indicate we done with meta information
                Body(optional): is payload(data). Provide data when adding new resource to server. Is empty if requesting data
         example: GET /contact HTTP/1.1
Response message: 
            httpversion statusCode statusText 
                Headers: proide info about response message
                    constent-type: text/html; charset=UTF-8
                        sending a string
                Body(optional)
         
        example: HTTP/1.1 200 OK
*/



// use more than one middleware
// express core has middleware
// function that excute when request to server
// each middleware has access to res and req objects

const express = require('express')
const app = express()
const {people} = require('./data')

// simple get 
//user request url 
// server sends status and data
app.get('/api/people', (req,res) =>{
    res.status(200).json({success:true, data:people})
})

app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})

