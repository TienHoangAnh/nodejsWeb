const http = require('http')
const fs = require('fs');
const { error, Console } = require('console');
const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        //case1: readfile error
        if(err){
            Console.log("ReadFile Error") //display basic error info
            Console.error(err)          //display detail error info
        }
        else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(1293, () => {
    console.log('http://localhost:1293')
})