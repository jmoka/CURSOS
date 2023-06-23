// Código Simples

const http = require("http");

http.createServer((req, res) =>{
    res.writeHead(200, {"content-type": "text/plain"}); // 
    
    res.write("banco de dados conectado")
    res.end()

},

console.log("Banco de dados conectado todos")

).listen(3000)











