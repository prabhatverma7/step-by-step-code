const express = require('express');
require('./database/mongoose-db');
const product = require('./model/product');

const app = express();
app.use(express.json());
app.post('/create', async (req, res) => {
    let data = new product(req.body);
    let result = await data.save();
    res.send(result);

});

app.get('/productlist', async (req, res) => {
    let data = await product.find();
    res.send(data);

});

app.delete('/delete/:_id', async (req, res) => {
    let data = await product.deleteOne(req.params);
    res.send(data);

});

app.put('/update/:_id', async (req, res) => {
    let data = await product.updateOne(req.params,
        { $set: req.body });
    res.send(data);

});


app.listen(5000);