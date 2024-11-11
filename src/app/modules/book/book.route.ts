import { Router } from "express";
import { BookController } from "./book.controller";

const router = Router();
router.post("/create", BookController.createBook);
export const BookRouter = router;
