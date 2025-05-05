import { request } from "express";
import mongoose from "mongoose";

const autorSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
  },
  fechaNacimiento: {
    type: Date,
    require: true,
  },
  nacionalidad: {
    type: Date,
    require: true,
  },
  libros: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Libros",
    },
  ],
});

export const autorModel = mongoose.model("Autor", autorSchema);
