const app = require('./app');
const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify({name:'prabhat',email:'prabhat@test.com'}));
    res.end();
}).listen(5000);
console.log("hello",app.x);
console.log("Import",app.z("Prabhat verma"));