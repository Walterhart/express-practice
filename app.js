const http = require('http')

const server = http.createServer((req, res) => {
    // method user performing
    console.log(req.method)
    // url request
    console.log(req.url)

    const url = req.url
    if(url == '/'){

    // pass header .writeHead(statusCode, { metatype})
    // metatype is what being sent
    // list of MIME type https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
    // 200 is status ok
    // list of status code https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    res.writeHead(200,{'content-type': 'text/html'})
    res.write('<h1> Welcome to the home page</h1>')

    //res.end() end communication
    res.end()
    } 
    else if(url === '/about') {
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('<h1> About the site</h1>')
        res.end()
    } else{
        res.writeHead(400,{'content-type': 'text/html'})
        res.write('<h1> Page not found</h1>')
        res.end()
    
    }

})
// server has same spefic ports 
// example 443
// in Development, port can use any port
server.listen(5000)