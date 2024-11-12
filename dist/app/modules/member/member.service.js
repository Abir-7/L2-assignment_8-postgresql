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
exports.MemberService = void 0;
const prisma_1 = __importDefault(require("../../client/prisma"));
const createMemberIntoDb = (memberData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.create({ data: memberData });
    return result;
});
// Get all members
const getAllMembersFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield prisma_1.default.member.findMany();
    return members;
});
// Get a single member by ID
const getSingleMemberFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.default.member.findUnique({
        where: { memberId: id },
    });
    return member;
});
// Update a member by ID
const updateMemberFromDb = (id, memberData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedMember = yield prisma_1.default.member.update({
        where: { memberId: id },
        data: memberData,
    });
    return updatedMember;
});
// Delete a member by ID
const deleteMemberFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedMember = yield prisma_1.default.member.delete({
        where: { memberId: id },
    });
    return deletedMember;
});
exports.MemberService = {
    createMemberIntoDb,
    getAllMembersFromDb,
    getSingleMemberFromDb,
    updateMemberFromDb,
    deleteMemberFromDb,
};
