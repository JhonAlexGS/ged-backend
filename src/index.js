import express from 'express';
import morgan from 'morgan';
import { PORT } from "./config.js";
import cors from "cors";
import "./database.js";
import userRoutes from "./routes/user.routes.js";

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

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
