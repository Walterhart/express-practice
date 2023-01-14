// controller
// exports functions

const {people} = require('../data')

// pass function as reference
const getPeople =  (req,res) =>{
    res.status(200).json({success:true, data:people})
}

const createPerson = (req,res) =>{
    const {name} = req.body
    if(!name){
        return res
            .status(400).
            json({success:false, msg:'Please provide name value'})
    }
    res.status(201).json({sucess:true, person:name})
}
const  createPostMan =  (req,res) =>{
    const {name} = req.body
    if(!name){
        return res
            .status(400).
            json({success:false, msg:'Please provide name value'})
    }
    res.status(201).json({sucess:true, data: [...people, name]})
    //console.log(name)
    //console.log(people)

}

const updatePerson = (req,res) =>{
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
}

const deletePerson =  (req,res) =>{
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res
            .status(404).
            json({success:false, msg:`Person doesnt exist with id  ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({succes:true, data: newPeople})
}

module.exports ={ 
    getPeople,
    createPerson,
    createPostMan,
    updatePerson,
    deletePerson,
}