import { Router } from "express";

export function createBaseRouter(controller) {
  const router = Router();

  router.get("/", async (req, res) => {
    try {
      const response = await controller.getAll();
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: "Error en GET all" });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const response = await controller.getById(id);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: "Error en GET by ID" });
    }
  });

  router.post("/", async (req, res) => {
    try {
      const response = await controller.create(req.body);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: "Error en POST" });
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const response = await controller.update(id, req.body);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: "Error en PUT" });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const response = await controller.delete(id);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: "Error en DELETE" });
    }
  });

  return router;
}
