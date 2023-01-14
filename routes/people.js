
const express = require('express')

// takes care of the routing  instead of the app
const router = express.Router()
const {people} = require('../data')
const {
    getPeople,
    createPerson,
    createPostMan,
    updatePerson,
    deletePerson
} = require('../controllers/people')

/* option 1 setup routes
// note / is api/people/
// simple get 
// user request url 
// server sends status and data
// match base path
router.get('/', getPeopele)

// handle get from axois for js form
// need to send content-type but axois handle it
router.post('/', createPerson)

// example for postman
// database handle id
router.post('/postman/people', createPostMan)

// put : update
// always have : data
// since update adding then must have a body
// example of postman url test: localhost:5000/api/people/1
router.put('/:id', updatePerson)

// delete
// note same path as put but different request
// directly acessing params object
router.delete('/:id', deletePerson)
*/

// option 2
// chain method
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPostMan)
router.route('/id').put(updatePerson).delete(deletePerson)

module.exports = router