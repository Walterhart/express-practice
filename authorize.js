// dummy authorize file
// to access correctly use user=john
const authorize =(req,res, next) =>{
    const {user} =req.query
    if(user === 'john'){

        // add a user property
        req.user = {name: 'john', id:3}
        next()
    }else{
       res.status(401).send(' Unauthorize')
    }
      
}
module.exports = authorize