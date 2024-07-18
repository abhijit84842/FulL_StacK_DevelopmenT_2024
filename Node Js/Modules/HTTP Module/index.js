// Create a new server..

const http = require('http')
const server = http.createServer((req , res)=>{
    res.end("Server Created...")
})

server.listen(3000)