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
exports.MemberController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const member_service_1 = require("./member.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.createMemberIntoDb(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: result,
        statusCode: http_status_codes_1.default.OK,
        message: "Member created successfuly",
    });
}));
// Get all members
const getAllMembers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield member_service_1.MemberService.getAllMembersFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        data: members,
        statusCode: http_status_codes_1.default.OK,
        message: "Members retrieved successfully",
    });
}));
// Get a single member by ID
const getSingleMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const member = yield member_service_1.MemberService.getSingleMemberFromDb(memberId);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: member,
        statusCode: http_status_codes_1.default.OK,
        message: "Member retrieved successfully",
    });
}));
// Update a member by ID
const updateMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const updatedMember = yield member_service_1.MemberService.updateMemberFromDb(memberId, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: updatedMember,
        statusCode: http_status_codes_1.default.OK,
        message: "Member updated successfully",
    });
}));
// Delete a member by ID
const deleteMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    yield member_service_1.MemberService.deleteMemberFromDb(memberId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "Member deleted successfully",
    });
}));
exports.MemberController = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember,
};
