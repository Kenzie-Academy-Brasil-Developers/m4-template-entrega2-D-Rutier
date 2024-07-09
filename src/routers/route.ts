import { Router } from "express";
import { BookController } from "../controllers/controller";
import { bookExists, checkBook } from "../middlewares/middleware";
import { bookPatchSchema, bookPostSchema } from "../schemas/schema";

export const bookRouter = Router()

const bookController = new BookController()

bookRouter.post("", checkBook(bookPostSchema), bookController.postBook)

bookRouter.get("", bookController.getBook);

bookRouter.use("/:bookId", bookExists)

bookRouter.get("/:bookId", bookController.getIndBook)

bookRouter.patch("/:bookId",checkBook(bookPatchSchema), bookController.patchBook)

bookRouter.delete("/:bookId", bookController.deleteBook)


