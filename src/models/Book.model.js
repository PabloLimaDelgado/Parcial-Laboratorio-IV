import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  titulo: {
    type: String,
    require: true,
  },
  resumen: {
    type: String,
    require: true,
  },
  genero: {
    type: String,
    require: true,
  },
  publicacion: {
    type: Date,
    require: true,
  },
  disponible: {
    type: Boolean,
    default: true,
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Autor",
    require: true,
  },
});

export const bookModel = mongoose.model("Libros", bookSchema);
