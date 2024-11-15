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
exports.BookController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const book_service_1 = require("./book.service");
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.createBookIntoDb(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: result,
        statusCode: http_status_codes_1.default.CREATED,
        message: "Book created successfully",
    });
}));
const getAllBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getAllBookFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        data: result,
        statusCode: http_status_codes_1.default.OK,
        message: "Books retrieved successfully",
    });
}));
const getSingleBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.BookService.getSingleBookFromDb(bookId);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: result,
        statusCode: http_status_codes_1.default.OK,
        message: "Book retrieved successfully",
    });
}));
const updateSingleBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const data = req.body;
    const result = yield book_service_1.BookService.updateSingleBookFromDb(bookId, data);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: result,
        statusCode: http_status_codes_1.default.OK,
        message: "Book updated successfully",
    });
}));
const deleteSingleBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    yield book_service_1.BookService.deleteSingleBookFromDb(bookId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Book successfully deleted",
    });
}));
exports.BookController = {
    createBook,
    getAllBook,
    getSingleBook,
    updateSingleBook,
    deleteSingleBook,
};
