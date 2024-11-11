import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { BorrowReturnService } from "./borrowReturn.service";
const borrowBook = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await BorrowReturnService.borrowBookInfoSaveIntoDb(data);
  sendResponse(res, {
    success: true,
    data: result,
    statusCode: httpStatus.OK,
    message: "Book borrowed successfully",
  });
});

const returnBook = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await BorrowReturnService.returnBookInfoSaveIntoDb(data);
  sendResponse(res, {
    success: true,
    data: result,
    statusCode: httpStatus.OK,
    message: "Book returned successfully",
  });
});

export const BorrowReturnController = {
  borrowBook,
  returnBook,
};
