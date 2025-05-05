import { BaseController } from "../../../practica-parcial/src/controllers/baseController.js";
import { autorModel } from "../models/Autor.model.js";
import { bookModel } from "../models/Book.model.js";

export class BookController extends BaseController {
  constructor() {
    super(bookModel);
  }

  async getAll() {
    try {
      return await this.model.find().populate("autor");
    } catch (error) {
      console.error("Error en getAll:", error);
      throw error;
    }
  }

  async getById(idAutor) {
    try {
      return await this.model.findById(idAutor).populate("autor");
    } catch (error) {
      console.error("Error en getById:", error);
      throw error;
    }
  }

  async create(data) {
    try {
      const libro = await this.model.create(data);
      const autor = await autorModel.findById(libro.autor);
      autor.libros.push(libro._id);
      await autor.save();
      return libro;
    } catch (error) {
      console.error("Error en create", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const libro = await this.model.findById(id);
      const autor = await autorModel.findById(libro.autor);

      const libroAutor = autor.libros.find(
        (libro) => libro._id.toString() === id
      );
      if (libroAutor) {
        throw new Error(
          "No se puede eliminar el libro porque tiene un autor asignado"
        );
      }
      return await this.model.deleteOne({ _id: id });
    } catch (error) {
      console.error("Error en delete", error);
      throw error;
    }
  }
}
