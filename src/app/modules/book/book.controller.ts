import httpStatus from "http-status-codes";
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

import sendResponse from "../../utils/sendResponse";
import { BookService } from "./book.service";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.createBookIntoDb(req.body);
  sendResponse(res, {
    success: true,
    data: result,
    statusCode: httpStatus.CREATED,
    message: "Book created successfully",
  });
});

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBookFromDb();
  sendResponse(res, {
    success: true,
    data: result,
    statusCode: httpStatus.OK,
    message: "Books retrieved successfully",
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await BookService.getSingleBookFromDb(bookId);
  sendResponse(res, {
    success: true,
    data: result,
    statusCode: httpStatus.OK,
    message: "Book retrieved successfully",
  });
});

const updateSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const data = req.body;
  const result = await BookService.updateSingleBookFromDb(bookId, data);
  sendResponse(res, {
    success: true,
    data: result,
    statusCode: httpStatus.OK,
    message: "Book updated successfully",
  });
});

const deleteSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  await BookService.deleteSingleBookFromDb(bookId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book successfully deleted",
  });
});

export const BookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook,
};
