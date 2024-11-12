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
  await BorrowReturnService.returnBookInfoSaveIntoDb(data);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book returned successfully",
  });
});

const overdueBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BorrowReturnService.overdueBooksFromDb();
  if (result.length > 0) {
    sendResponse(res, {
      success: true,
      data: result,
      statusCode: httpStatus.OK,
      message: "Overdue borrow list fetched",
    });
  } else {
    sendResponse(res, {
      success: true,
      data: [],
      statusCode: httpStatus.OK,
      message: "No overdue books",
    });
  }
});

export const BorrowReturnController = {
  borrowBook,
  returnBook,
  overdueBook,
};
