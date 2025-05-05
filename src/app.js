import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import autorRouter from "./routes/autor.routes.js";
import bookRouter from "./routes/book.routes.js";

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Parsear a JSON
app.use(express.json());

// Rutas
app.use("/authors", autorRouter)
app.use("/books", bookRouter)

mongoose
  .connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
  .then(() => {
    console.log("Conectado a mongoDB");

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB: ", error.message);
  });
