// const app = require('./app');
// const http = require('http');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.write(JSON.stringify({name:'prabhat',email:'prabhat@test.com'}));
//     res.end();
// }).listen(5000);
// console.log("hello",app.x);
// console.log("Import",app.z("Prabhat verma"));

const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log(req);
    res.send('This is home page...');
});

app.get('/about',(req,res)=>{
    res.send('This is about us page...');
});

app.listen(5000);