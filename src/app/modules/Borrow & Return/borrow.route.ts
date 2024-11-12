import { Router } from "express";
import { BorrowReturnController } from "./borrowReturn.controller";

const router = Router();

router.post("/", BorrowReturnController.borrowBook);
router.get("/overdue", BorrowReturnController.overdueBook);

export const BorrowRouter = router;
