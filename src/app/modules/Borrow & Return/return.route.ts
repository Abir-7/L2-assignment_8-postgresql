import { Router } from "express";
import { BorrowReturnController } from "./borrowReturn.controller";

const router = Router();

router.post("/", BorrowReturnController.returnBook);

export const ReturnBookRouter = router;
