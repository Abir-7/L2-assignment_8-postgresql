import { Book } from "@prisma/client";

import prisma from "../../client/prisma";
import { IBook } from "./book.interface";

const createBookIntoDb = async (bookData: IBook): Promise<Book> => {
  const result = await prisma.book.create({ data: bookData });
  return result;
};

const getAllBookFromDb = async (): Promise<Book[]> => {
  const result = await prisma.book.findMany();
  return result;
};

export const BookService = {
  createBookIntoDb,
  getAllBookFromDb,
};
