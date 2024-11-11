import { Router } from "express";
import { BookController } from "./book.controller";

const router = Router();

router.get("/all", BookController.getAllBook);
router.post("/create", BookController.createBook);
export const BookRouter = router;
