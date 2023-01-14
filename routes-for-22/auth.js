
const express = require('express')
const router = express.Router()


// simple post
// no accesss and can add to list
// inorder to add to list we need middleware
// need body!
router.post('/', (req,res) => {
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
    console.log(req.body)

})

module.exports = router