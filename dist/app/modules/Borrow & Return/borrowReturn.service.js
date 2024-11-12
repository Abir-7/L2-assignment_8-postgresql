"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowReturnService = void 0;
const prisma_1 = __importDefault(require("../../client/prisma"));
const borrowBookInfoSaveIntoDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrowRecord.create({ data });
    return result;
});
const returnBookInfoSaveIntoDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrowRecord.update({
        where: { borrowId: data.borrowId },
        data: {
            returnDate: new Date(),
        },
    });
    return result;
});
const overdueBooksFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const result = yield prisma_1.default.borrowRecord.findMany({
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
        const daysOverdue = Math.floor((new Date().getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24));
        return {
            borrowId: record.borrowId,
            bookTitle: record.book.title,
            borrowerName: record.member.name,
            overdueDays: daysOverdue,
        };
    });
    return overdueList;
});
exports.BorrowReturnService = {
    borrowBookInfoSaveIntoDb,
    returnBookInfoSaveIntoDb,
    overdueBooksFromDb,
};
