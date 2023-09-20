const http = require('http')
const fs = require('fs');
const port = process.env.PORT||1293
// const { error, Console } = require('console');
const server = http.createServer((req, res) => {
    if(req.url == '/'){
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

    } else if (req.url == '/login') {
        fs.readFile('login.html', (err, data) => {
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

    } else if (req.url == '/signup') {
        fs.readFile('signup.html', (err, data) => {
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

    } else if (req.url == '/facebook') {
        fs.readFile('facebook.html', (err, data) => {
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

    } else {
        res.write('<h1>404 - Not Found</h1>')
    }
})

server.listen(1293, () => {
    console.log('http://localhost:1293')
})