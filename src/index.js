import express from 'express';
import morgan from 'morgan';
import { PORT } from "./config.js";
import cors from "cors";
import "./database.js";
import userRoutes from "./routes/user.routes.js";
import fileRoutes from "./routes/file.routes.js";
import authRoutes from "./routes/auth.routes.js";

import { webcrypto } from 'node:crypto';
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}

const app = express();

// 🛡️ Configura CORS
// app.use(cors({
  //   origin: "http://localhost:5173", // Cambia esto según tu frontend
  //   credentials: true
  // }));
  
// Middleware opcional
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

app.use("/api/user", userRoutes);
app.use("/api/file", fileRoutes); 

app.use("/auth", authRoutes); 
// auth/google/callback

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
