export class BaseController {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      return await this.model.find();
    } catch (error) {
      console.error("Error en getAll", error);
      throw error;
    }
  }

  async getById(id) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      console.error("Error en getById", error);
      throw error;
    }
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      console.error("Error en create", error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      return await this.model.updateOne({ _id: id }, { $set: data });
    } catch (error) {
      console.error("Error en update", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      return await this.model.deleteOne({ _id: id });
    } catch (error) {
      console.error("Error en delete", error);
      throw error;
    }
  }
}
