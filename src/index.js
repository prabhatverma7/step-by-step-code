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
const filterMid = require('./middleware');
const app = express();
const router = express.Router();



//app.use(filterMid);
router.use(filterMid);
app.get('',(req,res)=>{
    //console.log(req);
    res.send('This is home page...');
});

app.get('/about',(req,res)=>{
    res.send('This is about us page...');
});

router.get('/user',(req,res)=>{
    res.send('This is user us page...');
});

router.get('/contact',(req,res)=>{
    res.send('This is contact us page...');
});

app.use('/',router);
app.listen(5000);