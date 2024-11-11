import { Router } from "express";
import { BookController } from "./book.controller";

const router = Router();

router.get("/all", BookController.getAllBook);
router.get("/:id", BookController.getSingleBook);
router.patch("/:id", BookController.updateSingleBook);
router.delete("/:id", BookController.deleteSingleBook);
router.post("/create", BookController.createBook);
export const BookRouter = router;
