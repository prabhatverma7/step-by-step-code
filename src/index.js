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

const filterMid = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please enter the age");
    } else if(req.query.age<18){
        res.send('Sorry!! You can access this page');
    } else {
        next();
    }
}

app.use(filterMid);

app.get('',(req,res)=>{
    //console.log(req);
    res.send('This is home page...');
});

app.get('/about',(req,res)=>{
    res.send('This is about us page...');
});

app.listen(5000);