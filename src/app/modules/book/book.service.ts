import { Book } from "@prisma/client";

import prisma from "../../client/prisma";
import { IBook } from "./book.interface";

const createBookIntoDb = async (bookData: IBook): Promise<Book> => {
  const existingBook = await prisma.book.findFirst({
    where: {
      title: {
        equals: bookData.title,
        mode: "insensitive",
      },
    },
  });

  if (existingBook) {
    throw new Error("Book title already exists.");
  }

  const result = await prisma.book.create({ data: bookData });
  return result;
};

const getAllBookFromDb = async (): Promise<Book[]> => {
  const result = await prisma.book.findMany();
  return result;
};

const getSingleBookFromDb = async (id: string): Promise<Book> => {
  const result = await prisma.book.findUniqueOrThrow({ where: { bookId: id } });
  console.log(result);
  return result;
};

const updateSingleBookFromDb = async (
  id: string,
  data: Partial<IBook>
): Promise<Book> => {
  const result = await prisma.book.update({
    where: { bookId: id },
    data: data,
  });
  console.log(result);
  return result;
};

const deleteSingleBookFromDb = async (id: string): Promise<Book> => {
  const result = await prisma.$transaction(async (prisma) => {
    await prisma.borrowRecord.deleteMany({ where: { bookId: id } });
    const deletedBook = await prisma.book.delete({
      where: { bookId: id },
    });
    return deletedBook;
  });
  return result;
};

export const BookService = {
  createBookIntoDb,
  getAllBookFromDb,
  getSingleBookFromDb,
  updateSingleBookFromDb,
  deleteSingleBookFromDb,
};
