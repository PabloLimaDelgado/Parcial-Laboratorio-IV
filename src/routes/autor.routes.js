import { AutorController } from "../controllers/autorController.js";
import { createBaseRouter } from "./base.routes.js";

const autorController = new AutorController();
const autorRouter = createBaseRouter(autorController);

autorRouter.put("/:id/addBook/:bookId", async (req, res) => {
  try {
    const { id, bookId } = req.params;
    const response = await autorController.postAutorAddLibro(id, bookId);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Error en el put de postAutorAddLibro" });
  }
});

export default autorRouter;
