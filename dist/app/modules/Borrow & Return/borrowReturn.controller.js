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
exports.BorrowReturnController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const borrowReturn_service_1 = require("./borrowReturn.service");
const borrowBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield borrowReturn_service_1.BorrowReturnService.borrowBookInfoSaveIntoDb(data);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: result,
        statusCode: http_status_codes_1.default.OK,
        message: "Book borrowed successfully",
    });
}));
const returnBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield borrowReturn_service_1.BorrowReturnService.returnBookInfoSaveIntoDb(data);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: result,
        statusCode: http_status_codes_1.default.OK,
        message: "Book returned successfully",
    });
}));
const overdueBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowReturn_service_1.BorrowReturnService.overdueBooksFromDb();
    if (result.length > 0) {
        (0, sendResponse_1.default)(res, {
            success: true,
            data: result,
            statusCode: http_status_codes_1.default.OK,
            message: "Overdue borrow list fetched",
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            success: true,
            data: [],
            statusCode: http_status_codes_1.default.OK,
            message: "No overdue books",
        });
    }
}));
exports.BorrowReturnController = {
    borrowBook,
    returnBook,
    overdueBook,
};
