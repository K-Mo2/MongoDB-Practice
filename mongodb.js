const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dbName = "task-manager";

async function main() {
  await client.connect();

  console.log("Connected successfully to the server");

  const db = client.db(dbName);
  const collection = db.collection("users");

  collection.insertOne({ name: "Sam", age: "20" });

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    return client.close();
  });
