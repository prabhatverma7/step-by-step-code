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

const insertData = async () =>{
    let dbConnection = await dbConnect();
    let result = await dbConnection.collection('product').insert({
        name:'Nord',
        brand:'OnePlus',
        price:10000,
        category:'mobile'
    });

    if(result.acknowledged){
        console.log('product data inserted successfully');
    }
}

const updateData = async () =>{
    let dbConnection = await dbConnect();
    let result = await dbConnection.collection('product').updateOne(
        {name:'Nord'},
        { $set:{ name:'Nord 2' }}
        ); 

        if(result.acknowledged)
        {console.log('record updated')}
       
}

const deleteData = async () =>{
    let dbConnection = await dbConnect();
    let result = await dbConnection.collection('product').deleteOne(
        {name:'Nord 2'}); 

        if(result.acknowledged)
        {console.log('record updated')}
       
}
// deleteData();
// insertData();
//updateData();
geData();

app.use('/', router);
app.listen(5000);