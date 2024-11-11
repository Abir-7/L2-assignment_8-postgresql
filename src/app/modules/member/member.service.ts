import { Member } from "@prisma/client";
import { IMember } from "./member.interface";
import prisma from "../../client/prisma";

const createMemberIntoDb = async (memberData: IMember): Promise<Member> => {
  const result = await prisma.member.create({ data: memberData });
  return result;
};

// Get all members
const getAllMembersFromDb = async (): Promise<Member[]> => {
  const members = await prisma.member.findMany();
  return members;
};

// Get a single member by ID
const getSingleMemberFromDb = async (id: string): Promise<Member | null> => {
  const member = await prisma.member.findUnique({
    where: { memberId: id },
  });
  return member;
};

// Update a member by ID
const updateMemberFromDb = async (
  id: string,
  memberData: IMember
): Promise<Member> => {
  const updatedMember = await prisma.member.update({
    where: { memberId: id },
    data: memberData,
  });
  return updatedMember;
};

// Delete a member by ID
const deleteMemberFromDb = async (id: string): Promise<Member> => {
  const deletedMember = await prisma.member.delete({
    where: { memberId: id },
  });
  return deletedMember;
};

export const MemberService = {
  createMemberIntoDb,
};
