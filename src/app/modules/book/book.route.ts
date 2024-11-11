import { Router } from "express";
import { BookController } from "./book.controller";

const router = Router();

router.get("/", BookController.getAllBook);
router.get("/:bookId", BookController.getSingleBook);
router.put("/:bookId", BookController.updateSingleBook);
router.delete("/:bookId", BookController.deleteSingleBook);
router.post("/", BookController.createBook);
export const BookRouter = router;
