import httpStatus from "http-status-codes";
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { MemberService } from "./member.service";
import sendResponse from "../../utils/sendResponse";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.createMemberIntoDb(req.body);
  sendResponse(res, {
    success: true,
    data: result,
    statusCode: httpStatus.OK,
    message: "Member created successfuly",
  });
});

// Get all members
const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const members = await MemberService.getAllMembersFromDb();
  sendResponse(res, {
    success: true,
    data: members,
    statusCode: httpStatus.OK,
    message: "Members retrieved successfully",
  });
});

// Get a single member by ID
const getSingleMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const member = await MemberService.getSingleMemberFromDb(memberId);

  sendResponse(res, {
    success: true,
    data: member,
    statusCode: httpStatus.OK,
    message: "Member retrieved successfully",
  });
});

// Update a member by ID
const updateMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const updatedMember = await MemberService.updateMemberFromDb(
    memberId,
    req.body
  );

  sendResponse(res, {
    success: true,
    data: updatedMember,
    statusCode: httpStatus.OK,
    message: "Member updated successfully",
  });
});
// Delete a member by ID
const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  await MemberService.deleteMemberFromDb(memberId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member deleted successfully",
  });
});

export const MemberController = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
