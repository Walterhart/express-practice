const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    res.json([{name: 'john'}, {name: 'bob'}]) 

})

app.all('*', () =>{
    
    
})

app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})