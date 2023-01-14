// Delete
// use route parameter for put and delete
// example : www.site.com/api/orders/:id delete order(path params)
// Postman : test APIs, dont need a frontend :D!


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

// put : update
// always have : data
// since update adding then must have a body
// example of postman url test: localhost:5000/api/people/1
app.put('/api/people/:id', (req,res) =>{
    const {id} = req.params
    const {name} = req.body
    console.log(id,name)
    const person = people.find((person) => person.id === Number(id))

    if(!person){
        return res
            .status(404).
            json({success:false, msg:`Person doesnt exist with id  ${id}`})
    }
    const newPeople = people.map((person) =>{
        if(person.id === Number(id))
        {
            person.name = name
        }
        return person
    })
    res.status(200).json({success : true, data : newPeople})
})

// delete
// note same path as put but different request
// directly acessing params object
app.delete('/api/people/:id', (req,res) =>{
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res
            .status(404).
            json({success:false, msg:`Person doesnt exist with id  ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({succes:true, data: newPeople})
})
app.listen(5000, () =>{
    console.log('Listening to port 5000...')
})


