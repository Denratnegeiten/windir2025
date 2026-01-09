const { MongoClient } = require('mongodb');
var data = require("./data.js").data;

console.log(data);

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'test2024';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  
  const collection = db.collection('documents');
  const insertResult = await collection.insertMany(data);
  console.log('Inserted documents =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());