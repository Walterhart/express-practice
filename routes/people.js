const express = require('express')

// takes care of the routing  instead of the app
const router = express.Router()
const {people} = require('../data')

// note / is api/people/
// simple get 
// user request url 
// server sends status and data
// match base path
router.get('/', (req,res) =>{
    res.status(200).json({success:true, data:people})
})

// handle get from axois for js form
// need to send content-type but axois handle it
router.post('/', (req,res) =>{
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
router.post('/postman/people', (req,res) =>{
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

// put : update
// always have : data
// since update adding then must have a body
// example of postman url test: localhost:5000/api/people/1
router.put('/:id', (req,res) =>{
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
router.delete('/:id', (req,res) =>{
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res
            .status(404).
            json({success:false, msg:`Person doesnt exist with id  ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({succes:true, data: newPeople})
})

module.exports = router