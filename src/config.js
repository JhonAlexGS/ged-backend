import { config } from "dotenv";
config();

// DATABASE
export const MONGO_DB =  process.env.MONGO_DB || "";
export const PORT =  process.env.PORT || "";

// Emails
export const EMAILJS_SERVICE_ID =  process.env.EMAILJS_SERVICE_ID || "";
export const EMAILJS_TEMPLATE_ID =  process.env.EMAILJS_TEMPLATE_ID || "";
export const EMAILJS_PUBLIC_KEY =  process.env.EMAILJS_PUBLIC_KEY || "";

export const USER_EMAIL =  process.env.USER_EMAIL || "";
export const PASSWORD_EMAIL =  process.env.PASSWORD_EMAIL || "";