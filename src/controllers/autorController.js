import { BaseController } from "../../../practica-parcial/src/controllers/baseController.js";
import { autorModel } from "../models/Autor.model.js";
import { bookModel } from "../models/Book.model.js";

export class AutorController extends BaseController {
  constructor() {
    super(autorModel);
  }

  async getAll() {
    try {
      return await this.model.find().populate("libros");
    } catch (error) {
      console.error("Error en getAll:", error);
      throw error;
    }
  }

  async getById(idAutor) {
    try {
      return await this.model.findById(idAutor).populate("libros");
    } catch (error) {
      console.error("Error en getById:", error);
      throw error;
    }
  }

  async postAutorAddLibro(idAutor, idLibro) {
    try {
      const autor = await this.getById(idAutor);
      const libro = await bookModel.findById(idLibro);

      if (!libro) {
        throw new Error("No existe el libro con ese id");
      }

      autor.libros.push(libro._id);
      await autor.save();

      return await this.model.findById(idAutor).populate("libros");
    } catch (error) {
      console.error("Error en postAutorAddLibro", error);
      throw error;
    }
  }
}
