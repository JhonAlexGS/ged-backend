import mongoose from "mongoose";
import { MONGO_DB } from "./config.js";

try {
  const db = await mongoose.connect(MONGO_DB);
  console.log("Database is connected to", db.connection.name);
} catch (error) {
  console.error(error.message);
}
