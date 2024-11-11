import httpStatus from "http-status-codes";
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

import sendResponse from "../../utils/sendResponse";
import { BookService } from "./book.service";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBookIntoDb(req.body);
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.OK,
    message: "Book added successfuly",
  });
});

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBookFromDb();
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.OK,
    message: "All Books are retrives successfuly",
  });
});

export const BookController = {
  createBook,
  getAllBook,
};
