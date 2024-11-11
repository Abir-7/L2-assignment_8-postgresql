import { Member } from "@prisma/client";
import { IMember } from "./member.interface";
import prisma from "../../client/prisma";

const createMemberIntoDb = async (memberData: IMember): Promise<Member> => {
  const result = await prisma.member.create({ data: memberData });
  return result;
};

export const MemberService = {
  createMemberIntoDb,
};
