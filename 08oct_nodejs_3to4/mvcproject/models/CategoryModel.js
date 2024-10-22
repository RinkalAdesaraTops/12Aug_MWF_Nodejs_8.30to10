const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'node3db';
let db
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  db = client.db(dbName);

}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

  module.exports = db