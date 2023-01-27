const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('./database/mongodb');
const app = express();

app.use(express.json());
app.get('/getAllProduct', async (req, res) => {
    
    let dbConnection = await dbConnect();
    let dbResult = await dbConnection.collection('product').find().toArray();
    res.send(dbResult);
});

app.get('/getProductbybrand', async (req, res) => {
    
    let dbConnection = await dbConnect();
    let dbResult = await dbConnection.collection('product').find({brand:req.query.brand}).toArray();
    res.send(dbResult);
});

app.post('/saveproduct', async (req, res) => {
    
    let dbConnection = await dbConnect();
    let dbResult = await dbConnection.collection('product').insert(req.body);
    res.send(dbResult);
});

app.put('/updateproduct', async (req, res) => {
    
    let dbConnection = await dbConnect();
    let dbResult = await dbConnection.collection('product').updateOne(  
    {name:req.body.name},
    { $set:{ price:req.body.price }});
    res.send(dbResult);
});

app.put('/updateproduct/:name', async (req, res) => {
    
    let dbConnection = await dbConnect();
    let dbResult = await dbConnection.collection('product').updateOne(  
    {name:req.params.name},
    { $set:{ price:req.body.price }});
    res.send(dbResult);
});

app.delete('/deleteproduct/:id', async (req, res) => {
    
    let dbConnection = await dbConnect();
    let dbResult = await dbConnection.collection('product')
                 .deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send(dbResult);
});


app.listen(5000);