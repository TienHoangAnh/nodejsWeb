const http = require('http')
const host = 'localhost'
const port = 1209
const server = http.createServer((req, res) => {
    res.write("Tien Hoang Anh")
    res.write("Phone: 0559578575")
    res.end()
})

server.listen(port, () => {
    console.log('Server is runnning at http://' + host + ":" + port)
})