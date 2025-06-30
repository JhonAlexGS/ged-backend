import { config } from "dotenv";
config();

// DATABASE
export const MONGO_DB =  process.env.MONGO_DB || "";
export const PORT =  process.env.PORT || "";