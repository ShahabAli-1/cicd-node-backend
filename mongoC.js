import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://user2:${password}@whatsapp.drxcc6u.mongodb.net/?retryWrites=true&w=majority&appName=Whatsapp`; // clustore url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful");
} catch (e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;
