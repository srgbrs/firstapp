
const port = process.env.port || 3000;
const http = require('http')
const fs = require("fs");
 //const hostname = '127.0.0.1'
// const port = 3000
const server = http.createServer((req, res) => 
{  res.statusCode = 200 
    res.setHeader('Content-Type', 'text/html') 
    

    fs.readFile("./lab5.html", null, (error, data) => {
        if (error) {
            res.writeHead(404);
          res.write("Whoops! File not found!");
        } else {
          res.write(data);
        }
        res.end();
        });

})
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`) })