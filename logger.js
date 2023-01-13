// goes with 13-middleware-2.js

const logger = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
     //res.send('testing')
    // pass to next middleware
    next()
}
module.exports = logger