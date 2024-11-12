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
exports.BookService = void 0;
const prisma_1 = __importDefault(require("../../client/prisma"));
const createBookIntoDb = (bookData) => __awaiter(void 0, void 0, void 0, function* () {
    const existingBook = yield prisma_1.default.book.findFirst({
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
    const result = yield prisma_1.default.book.create({ data: bookData });
    return result;
});
const getAllBookFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findMany();
    return result;
});
const getSingleBookFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUniqueOrThrow({ where: { bookId: id } });
    console.log(result);
    return result;
});
const updateSingleBookFromDb = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.update({
        where: { bookId: id },
        data: data,
    });
    console.log(result);
    return result;
});
const deleteSingleBookFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma.borrowRecord.deleteMany({ where: { bookId: id } });
        const deletedBook = yield prisma.book.delete({
            where: { bookId: id },
        });
        return deletedBook;
    }));
    return result;
});
exports.BookService = {
    createBookIntoDb,
    getAllBookFromDb,
    getSingleBookFromDb,
    updateSingleBookFromDb,
    deleteSingleBookFromDb,
};
