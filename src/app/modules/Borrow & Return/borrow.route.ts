import { Router } from "express";
import { BorrowReturnController } from "./borrowReturn.controller";

const router = Router();

router.post("/", BorrowReturnController.borrowBook);

export const BorrowRouter = router;
