import { Router } from "express";
import { LoginController } from "../../controllers/login-controller";
import { ListBooksController } from "../../controllers/list-books-controller";
import { tokenMiddleware } from "../middlewares/token-middleware";
import { CreateBookController } from "../../controllers/create-book-controller";
import { UpdateBookController } from "../../controllers/update-book-controller";
import { DeleteBookController } from "../../controllers/delete-book-controller";

const router = Router();

const loginController = new LoginController();
const listBooksController = new ListBooksController();
const createBookController = new CreateBookController();
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();

router.post("/login", loginController.handle);
router.get("/books", tokenMiddleware, listBooksController.handle);
router.post("/book", tokenMiddleware, createBookController.handle);
router.put("/book/:id", tokenMiddleware, updateBookController.handle);
router.delete("/book/:id", tokenMiddleware, deleteBookController.handle);

export { router };
