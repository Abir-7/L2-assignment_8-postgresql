import { Member } from "@prisma/client";

const createMemberIntoDb=async(data:Partial<Member>)