import { BookController } from "../controllers/bookController.js";
import { createBaseRouter } from "./base.routes.js";

const bookController = new BookController();
const bookRouter = createBaseRouter(bookController);

export default bookRouter;
