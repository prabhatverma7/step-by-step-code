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
const dbConnect = require('./database/mongodb');
const app = express();
const router = express.Router();




//app.use(filterMid);
router.use(filterMid);
app.get('', (req, res) => {
    //console.log(req);
    res.send('This is home page...');
});

app.get('/about', (req, res) => {
    res.send('This is about us page...');
});

router.get('/user', (req, res) => {
    res.send('This is user us page...');
});

router.get('/contact', (req, res) => {
    res.send('This is contact us page...');
});

const geData = async () => {

    console.log('try to connect mongo db');
    let dbConnection = await dbConnect();
    let dbResult = await dbConnection.collection('product').find({name:'Nokia 6.1 Plus'}).toArray();
   console.warn(dbResult);

}

geData();

app.use('/', router);
app.listen(5000);