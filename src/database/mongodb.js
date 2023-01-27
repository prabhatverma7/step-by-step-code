const { MongoClient } = require('mongodb');
const mongodbUrl = 'mongodb://127.0.0.1:27017';
const databaseName = "e-comm";
const client = new MongoClient(mongodbUrl);

const dbConnect = async () => {
  let result = await client.connect();
  db = result.db(databaseName);
  return db;
} 

module.exports = dbConnect;