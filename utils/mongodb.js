import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

export async function connectToDatabase() {
  const client = new MongoClient(uri, options);

  if (!client.isConnected()) await client.connect();

  const db = client.db("leanDB");

  return { db, client };
}
