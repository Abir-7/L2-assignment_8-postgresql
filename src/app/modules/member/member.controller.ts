import httpStatus from "http-status-codes";
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { MemberService } from "./member.service";
import sendResponse from "../../utils/sendResponse";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.createMemberIntoDb(req.body);
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.OK,
    message: "Member created successfuly",
  });
});
export const MemberController = {
  createMember,
};
