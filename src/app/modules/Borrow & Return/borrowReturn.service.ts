import { BorrowRecord } from "@prisma/client";
import prisma from "../../client/prisma";

const borrowBookInfoSaveIntoDb = async (data: {
  bookId: string;
  memberId: string;
}): Promise<BorrowRecord> => {
  const result = await prisma.borrowRecord.create({ data });
  return result;
};

const returnBookInfoSaveIntoDb = async (data: {
  borrowId: string;
}): Promise<BorrowRecord> => {
  const result = await prisma.borrowRecord.update({
    where: { borrowId: data.borrowId },
    data: {
      returnDate: new Date(),
    },
  });
  return result;
};
export const BorrowReturnService = {
  borrowBookInfoSaveIntoDb,
  returnBookInfoSaveIntoDb,
};
