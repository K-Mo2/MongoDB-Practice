const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "myProject";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");

  //   const insertResult = await collection.insertMany([
  //     { a: 1 },
  //     { a: 2 },
  //     { a: 3 },
  //   ]);

  //   const user = await collection.findOne({ a: 1 });

  //   const updateUser = await collection.updateOne(
  //     { a: 1 },
  //     { $set: { a: "first A" } }
  //   );

  //   const deleteUser = await collection.deleteOne({ a: "first A" });

  //   console.log(deleteUser);
  // the following code examples can be pasted here...

  await collection.drop();

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
