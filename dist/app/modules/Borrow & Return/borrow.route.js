"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRouter = void 0;
const express_1 = require("express");
const borrowReturn_controller_1 = require("./borrowReturn.controller");
const router = (0, express_1.Router)();
router.post("/", borrowReturn_controller_1.BorrowReturnController.borrowBook);
router.get("/overdue", borrowReturn_controller_1.BorrowReturnController.overdueBook);
exports.BorrowRouter = router;
