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

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.getSingleBookFromDb(bookId);
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.OK,
    message: "Book data is retrives successfuly",
  });
});

const updateSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const data = req.body;
  const result = await BookService.updateSingleBookFromDb(bookId, data);
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.OK,
    message: "Book is updated successfuly",
  });
});

const deleteSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.deleteSingleBookFromDb(bookId);
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.OK,
    message: "Book data is deleted successfuly",
  });
});

export const BookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook,
};
