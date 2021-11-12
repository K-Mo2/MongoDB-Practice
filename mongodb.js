const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dbName = "myProject";

async function main() {
  await client.connect();

  console.log("Connected successfully to the server");

  const db = client.db(dbName);
  const collection = db.collection("documents");

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    return client.close();
  });
