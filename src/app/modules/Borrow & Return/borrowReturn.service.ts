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

const overdueBooksFromDb = async (): Promise<any> => {
  const today = new Date();
  const result = await prisma.borrowRecord.findMany({
    where: {
      AND: [
        {
          borrowDate: {
            lt: new Date(today.setDate(today.getDate() - 14)),
          },
        },
        {
          returnDate: null,
        },
      ],
    },
    include: {
      book: true,
      member: true,
    },
  });

  // Calculate `daysOverdue` for each record
  const overdueList = result.map((record) => {
    const dueDate = new Date(record.borrowDate);
    dueDate.setDate(dueDate.getDate() + 14);

    const daysOverdue = Math.floor(
      (new Date().getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    return {
      borrowId: record.borrowId,
      bookTitle: record.book.title,
      borrowerName: record.member.name,
      overdueDays: daysOverdue,
    };
  });

  return overdueList;
};

export const BorrowReturnService = {
  borrowBookInfoSaveIntoDb,
  returnBookInfoSaveIntoDb,
  overdueBooksFromDb,
};
